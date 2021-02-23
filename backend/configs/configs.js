module.exports = () => {
    const ipServer = "localhost:80";
    // ipServer: "msn-js.herokuapp.com";
    // ipServer: "localhost:80";

    return {
        ipServer: ipServer,
        client_id: "3e7faf2a2ea6459586e73226950e4644", // Your client id
        client_secret: "24f3a2a592e64fa29976cec753bf789f", // Your secret
        redirect_uri: `http://${ipServer}/routes/spotify/callback`, // Your redirect uri
    };
};
