import type ConnectionMessage from "./ConnectionMessage.js";
import type DrawMessage from "./DrawMessage.js";

export type WsMessage = ConnectionMessage | DrawMessage;
