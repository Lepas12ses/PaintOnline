import type { WebsocketRequestHandler } from "express-ws";

import type { WsMessage } from "../schema/WsMessage.js";
import type expressWs from "express-ws";

class DrawController {
	wss: ReturnType<expressWs.Instance["getWss"]>;
	clientsIds: WeakMap<Parameters<WebsocketRequestHandler>[0], string> =
		new WeakMap();

	constructor(wss: ReturnType<expressWs.Instance["getWss"]>) {
		this.wss = wss;
	}

	handler: WebsocketRequestHandler = (ws, req) => {
		ws.on("message", msg => {
			console.log("s");

			const data = JSON.parse(msg.toString()) as WsMessage;

			switch (data.type) {
				case "connection":
					{
						this.clientsIds.set(ws, data.id);
					}
					break;
				case "draw":
					{
					}
					break;
			}
		});
	};
}

export default DrawController;
