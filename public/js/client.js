/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
    "use strict";

    let websocket;
    let url         = document.getElementById("connect_url");
    let connect     = document.getElementById("connect");
    let protocol    = document.getElementById("protocol");
    let sendMessage = document.getElementById("send_message");
    let message     = document.getElementById("message");
    let close       = document.getElementById("close");
    let output      = document.getElementById("output");
    let username    = document.getElementById('username');



    /**
     * Log output to web browser.
     *
     * @param  {string} message to output in the browser window.
     *
     * @return {void}
     */
    function outputLog(message) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();

        output.innerHTML += `${timestamp} ${message}<br>`;
        output.scrollTop = output.scrollHeight;
    }




    /**
     * Select what subprotocol to use for websocekt connection.
     *
     * @return {string} with name of subprotocol.
     */
    function setSubProtocol() {
        return protocol.value;
    }



    /**
     * What to do when user clicks Connect
     */
    connect.addEventListener("click", function(/*event*/) {
        if (!protocol.value) {
            websocket = new WebSocket(url.value);
        } else {
            websocket = new WebSocket(url.value, setSubProtocol());
        }

        websocket.onopen = function() {
            outputLog("The websocket is now open using '" + websocket.protocol + "'.");
        };

        websocket.onmessage = function(event) {
            let res = JSON.parse(event.data);
            outputLog(res.username + ": " + res.message);
        };

        websocket.onclose = function() {
            outputLog("Websocket is now closed.");
        };
    }, false);




    /**
     * What to do when user clicks to send a message.
     */
    sendMessage.addEventListener("click", function(/*event*/) {
        let messageText = message.value;

        if (!websocket || websocket.readyState === 3) {
        } else {
            let msg = JSON.stringify({"username": username.value, "message": messageText });
            websocket.send(msg);
            outputLog(`${username.value}: ` + messageText);
        }
    });



    /**
     * What to do when user clicks Close connection.
     */
    close.addEventListener("click", function(/*event*/) {
        websocket.close();
        outputLog("Prepare to close websocket.");
    });
})();
