const express = require("express");
const router = express.Router();
const request = require("request"); // "Request" library
const querystring = require("querystring");
const config = require("./configs/configs")();

const { socketAddMusic, socketsConnected } = require("./models");
const { setInterval } = require("timers");

const client_id = config.client_id; // Your client id
const client_secret = config.client_secret; // Your secret
const redirect_uri = config.redirect_uri; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var stateKey = "spotify_auth_state";
let socketid;
let repeat;

var returnRouter = function (io) {
    router.get("/spotify/status", async (req, res) => {
        res.json({
            server: "ok",
            socketsConnected,
        });
    });

    router.get("/spotify/login", async (req, res) => {
        var state = generateRandomString(16);
        res.cookie(stateKey, state);

        // your application requests authorization
        var scope = "user-read-currently-playing";

        socketid = req.query.socketid;
        console.log("chegou no login");

        res.redirect(
            "https://accounts.spotify.com/authorize?" +
                querystring.stringify({
                    response_type: "code",
                    client_id: client_id,
                    scope: scope,
                    redirect_uri: redirect_uri,
                    state: state,
                })
        );
    });

    router.get("/spotify/callback", async (req, res) => {
        // your application requests refresh and access tokens
        // after checking the state parameter

        var code = req.query.code || null;
        var state = req.query.state || null;
        var storedState = req.cookies ? req.cookies[stateKey] : null;

        res.clearCookie(stateKey);
        var authOptions = {
            url: "https://accounts.spotify.com/api/token",
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: "authorization_code",
            },
            headers: {
                Authorization: "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
            },
            json: true,
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: "https://api.spotify.com/v1/me/player/currently-playing?market=ES&additional_types=episode",
                    headers: { Authorization: "Bearer " + access_token },
                    json: true,
                };

                //use the access token to access the Spotify Web API

                //clearInterval(repeat); //Limpa o repeat, basicamente limpa o ultimo interval feito, para que não fique alternando as musicas.

                // repeat = setInterval(() => {
                //Faz um interval para que quando a pessoa libere 1x, ele fique atualizando as musicas.
                console.log("chegou no callback");

                request.get(options, async function (error, response, body) {
                    if (body.item.name) {
                        socketAddMusic({ socketid, name: body.item.name, author: body.item.artists[0].name, url: body.item.external_urls.spotify });
                        io.emit("socketsConnected", socketsConnected);

                        res.send(`<div>
                                <h6 id='music'>Você está ouvindo: ${body.item.name}</h6>
                                <h6>De: ${body.item.artists[0].name}</h6>
                                <a href='${body.item.external_urls.spotify}' target="_blank" >Link: ${body.item.external_urls.spotify}</a>
                                <a>${access_token}</a>
                                <script>window.close()</script>

                            </div>`);
                    } else {
                        res.send(`<div style=''>
                                <h6 id='music'>No momento não está tocando musica no seu spotify.</h6>
                            </div>`);
                    }
                });
                // }, 5000);
            } else {
                res.redirect(
                    "/#" +
                        querystring.stringify({
                            error: "invalid_token",
                        })
                );
            }
        });
    });

    return router;
};

module.exports = returnRouter;
