import type { Figure } from "./Figure.js";

interface IWsMessage {
	id: string;
	type: string;
}

export interface ConnectionMessage extends IWsMessage {
	type: "connection";
	username: string;
}

export interface DrawMessage extends IWsMessage {
	type: "draw";
	figure: Figure;
}

export type WsMessage = ConnectionMessage | DrawMessage;
