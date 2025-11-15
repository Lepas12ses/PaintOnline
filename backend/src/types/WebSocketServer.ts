import type expressWs from "express-ws";

export type WebSocketServer = ReturnType<expressWs.Instance["getWss"]>;
