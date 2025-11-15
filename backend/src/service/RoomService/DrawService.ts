import type { WebSocket } from "../../types/WebSocket.js";
import type { WebSocketServer } from "../../types/WebSocketServer.js";
import type { ConnectionMessage, DrawMessage } from "../../schema/WsMessage.js";

export default class DrawService {
	wss: WebSocketServer;
	clientsIds: WeakMap<WebSocket, string> = new WeakMap();

	constructor(wss: WebSocketServer) {
		this.wss = wss;
	}

	connect(ws: WebSocket, msg: ConnectionMessage) {
		this.clientsIds.set(ws, msg.id);
	}

	drawFigure(msg: DrawMessage) {
		const { id } = msg;

		this.wss.clients.forEach(client => {
			const clientId = this.clientsIds.get(client);

			if (id === clientId) client.send(JSON.stringify(msg));
		});
	}
}
