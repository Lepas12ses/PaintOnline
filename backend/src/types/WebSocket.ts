import type { WebsocketRequestHandler } from "express-ws";

export type WebSocket = Parameters<WebsocketRequestHandler>[0];
