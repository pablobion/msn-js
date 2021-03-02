import interact from "interactjs";

export default (chatRefText, socketidUser) => {
    const indexUserChat = chatRefText.current.findIndex((elem) => elem.id === socketidUser);

    interact(".draggable-chat")
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: "parent",
                    endOnly: true,
                }),
            ],
            // enable autoScroll
            autoScroll: true,

            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
            },
        })
        .resizable({
            edges: { top: true, left: true, bottom: true, right: true },
            listeners: {
                move: function (event) {
                    Object.assign(event.target.style, {
                        width: `${event.rect.width}px`,
                        height: `${event.rect.height}px`,
                    });
                },
            },
        });

    function dragMoveListener(event) {
        var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        target.parentNode.appendChild(target); // faz puxar para frente ao mover...
        if (chatRefText.current[indexUserChat]) chatRefText.current[indexUserChat].scrollTop = chatRefText.current[indexUserChat].scrollHeight; //move o scroll para baixo

        chatRefText.current.forEach((elem, index) => {
            if (elem) {
                if (elem.scrollTop) elem.scrollTop = elem.scrollHeight;
            }
        });

        // translate the element
        target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";

        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
};
