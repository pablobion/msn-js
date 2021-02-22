const request = require("request"); // "Request" library
const querystring = require("querystring");
const config = require("../configs/configs")();

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

const spotifyApi = async (req, res) => {
    res.json({
        totalNews: "ok",
        totalMail: 10,
    });
};

const login = async (req, res) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = "user-read-currently-playing";
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
};

const callback = async (req, res) => {
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

            //   res.json({
            //       access_token,
            //       refresh_token,
            //   });

            var options = {
                url: "https://api.spotify.com/v1/me/player/currently-playing?market=ES&additional_types=episode",
                headers: { Authorization: "Bearer " + access_token },
                json: true,
            };

            // use the access token to access the Spotify Web API
            request.get(options, function (error, response, body) {
                res.json({
                    status: "success",
                    body,
                });
            });

            // we can also pass the token to the browser to make requests from there
            //   res.json({
            //       success: querystring.stringify({
            //           access_token: access_token,
            //           refresh_token: refresh_token,
            //       }),
            //   });
        } else {
            res.redirect(
                "/#" +
                    querystring.stringify({
                        error: "invalid_token",
                    })
            );
        }
    });
};

module.exports = {
    spotifyApi,
    login,
    callback,
};
