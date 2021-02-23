var express = require("express");
var router = express.Router();

/* GET home page. */
var returnRouter = function (io) {
    router.get("status", function (req, res, next) {
        console.log("chorou heinnn");
    });

    router.get("/sla", function (req, res, next) {
        res.render("index", {
            title: "Express",
        });
    });

    router.post("/message", function (req, res) {
        console.log("Post request hit.");
        // res.contentType('text/xml');
        console.log(appjs);
        io.sockets.emit("display text", req);
        // res.send('<Response><Sms>'+req.body+'</Sms></Response>');
    });

    return router;
};

module.exports = returnRouter;
