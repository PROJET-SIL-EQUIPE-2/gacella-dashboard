// WebSocket.js

import React, { createContext } from 'react'
import io from 'socket.io-client';
import { WS_BASE } from './config';
import { useDispatch } from 'react-redux';
import {testWebSocket} from "../redux/actions/actions"

const WebSocketContext = createContext(null)

export { WebSocketContext }

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (roomId, message) => {
        const payload = {
            roomId: roomId,
            data: message
        }
        socket.emit("event://send-message", JSON.stringify(payload));
        dispatch(testWebSocket(payload));
    }

    if (!socket) {
        socket = io.connect(WS_BASE)

        socket.on("event://get-message", (msg) => {
            const payload = JSON.parse(msg);
            dispatch(testWebSocket(payload));
        })

        ws = {
            socket: socket,
            sendMessage
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}
