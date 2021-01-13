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

    const upload = (file) => {
        file = document.getElementById("myFile").files[0];
        /* Is the file an image? */
        if (!file || !file.type.match(/image.*/)) return;

        /* It is! */
        document.body.className = "uploading";

        /* Lets build a FormData object*/
        var fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
        fd.append("image", file); // Append the file
        var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
        xhr.open("POST", "https://api.imgur.com/3/image.json"); // Boooom!
        xhr.onload = function () {
            // Big win!
            console.log(JSON.parse(xhr.responseText).data.link);
            // document.querySelector("#link").href = JSON.parse(xhr.responseText).data.link;
            document.body.className = "uploaded";
        };

        xhr.setRequestHeader("Authorization", "Client-ID 28aaa2e823b03b1"); // Get your own key http://api.imgur.com/

        // Ok, I don't handle the errors. An exercise for the reader.

        /* And now, we send the formdata */
        xhr.send(fd);
    };

    return (
        <Container>
            <div>DROP!</div>
            <button onClick={() => document.querySelector("input").click()}>Or click</button>
            {/* <input style={{ visibility: "collapse", width: 0 }} type="file" id="input-files" onChange={upload(this.files[0])} /> */}

            <input id="myFile" type="file" onChange={upload} required />
            <button type="submit">Submit</button>
        </Container>
    );
};

export default UploadPhoto;
