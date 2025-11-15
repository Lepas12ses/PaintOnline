import type { Figure } from "./Figure";

interface IWsMessage {
	id: string;
	type: string;
}

interface ConnectionMessage extends IWsMessage {
	type: "connection";
	username: string;
}

interface DrawMessage extends IWsMessage {
	type: "draw";
	figure: Figure;
}

export type WsMessage = ConnectionMessage | DrawMessage;
