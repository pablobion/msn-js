import React from "react";

import { Container } from "./styles";

const UploadPhoto = () => {
    React.useEffect(() => {
        /* Drag'n drop stuff */
        window.ondragover = function (e) {
            e.preventDefault();
        };
        window.ondrop = function (e) {
            e.preventDefault();
            upload(e.dataTransfer.files[0]);
        };
    }, []);

    const upload = (e) => {
        e.preventDefault();
        const file = document.getElementById("myFile").files[0];
        /* Is the file an image? */
        if (!file || !file.type.match(/image.*/)) return;

        /* Lets build a FormData object*/
        const fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
        fd.append("image", file); // Append the file
        var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
        xhr.open("POST", "https://api.imgur.com/3/image.json"); // Boooom!
        xhr.onload = function () {
            // Big win!
            console.log(JSON.parse(xhr.responseText).data.link);
        };
        xhr.onerror = function (e) {
            alert("Error Status: " + e.target.status);
        };

        xhr.setRequestHeader("Authorization", "Client-ID 28aaa2e823b03b1"); // Get your own key http://api.imgur.com/

        // Ok, I don't handle the errors. An exercise for the reader.

        /* And now, we send the formdata */
        xhr.send(fd);
    };

    return (
        <Container>
            <div id="div-drop">DROP!</div>
            <div>
                <p>Envio rápido</p>
                {/* <input type="file" id="myFile" onChange={upload} required></input> */}
            </div>

            <input id="myFile" type="file" required />
            <button type="submit" onClick={upload}>
                Submit
            </button>
        </Container>
    );
};

export default UploadPhoto;
