const express = require("express");
const router = express.Router();
const spotify = require("./spotifyApi/spotifyapi");

router.get("/spotify/status", spotify.spotifyApi);
router.get("/spotify/login", spotify.login);
router.get("/spotify/callback", spotify.callback);

module.exports = router;
