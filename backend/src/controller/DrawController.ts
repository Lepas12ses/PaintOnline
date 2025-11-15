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
			const data = JSON.parse(msg.toString()) as WsMessage;

			switch (data.type) {
				case "connection":
					{
						this.clientsIds.set(ws, data.id);
					}
					break;
				case "draw":
					{
						const { id } = data;

						this.wss.clients.forEach(client => {
							const clientId = this.clientsIds.get(client);

							if (id === clientId) client.send(JSON.stringify(data));
						});
					}
					break;
			}
		});
	};
}

export default DrawController;
