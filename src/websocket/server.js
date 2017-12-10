"use strict";

const WebSocket = require("ws");

module.exports = function(server) {
    
    const wss = new WebSocket.Server({
        server: server,
        clientTracking: true, // keep track on connected clients,
        handleProtocols: handleProtocols // Manage what subprotocol to use.
    });

    /**
     * Select subprotocol to use for connection.
     *
     * @param {Array} protocols              Subprotocols to choose from, sent
     *                                        by client request.
     * @param {http.IncomingMessage} request The client HTTP GET request.
     *
     * @return {void}
     */
    function handleProtocols(protocols /*, request */) {
        console.log(`Incoming protocol requests '${protocols}'.`);
        for (var i=0; i < protocols.length; i++) {
            if (protocols[i] === "text") {
                return "text";
            } else if (protocols[i] === "json") {
                return "json";
            }
        }
        return false;
    }



    /**
     * Broadcast data to everyone except one self (ws).
     *
     * @param {WebSocket} ws   The current websocket.
     * @param {string}    data The data to send.
     *
     * @return {void}
     */
    function broadcastExcept(ws, data) {
        let clients = 0;
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                clients++;
                let parsedData = JSON.parse(data);
                if (ws.protocol === "json") {
                    let msg = {
                        username: parsedData.username,
                        message: parsedData.message,
                        timestamp: Date()
                    };
                    client.send(JSON.stringify(msg));
                } else {
                    client.send(data);
                }
            }
        });
    }



    // Setup for websocket requests.
    // Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
    wss.on("connection", (ws/*, req*/) => {

        broadcastExcept(ws, JSON.stringify({message: `New client connected (${wss.clients.size}) using '${ws.protocol}'.`, username: "Server"}));
        //console.log(ws);

        ws.on("message", (message) => {
            console.log("Received: %s", message);
            broadcastExcept(ws, message);
        });

        ws.on("error", (error) => {
            console.log(`Server error: ${error}`);
        });

        ws.on("close", (code, reason) => {
            console.log(`Closing connection: ${code} ${reason}`);
            broadcastExcept(ws, JSON.stringify({message: `Client disconnected (${wss.clients.size}).`, username: "Server"}));
        });
    });

};
