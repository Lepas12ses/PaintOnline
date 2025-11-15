import type { WebsocketRequestHandler } from "express-ws";

import type { WsMessage } from "../schema/WsMessage.js";
import DrawService from "../service/RoomService/DrawService.js";
import type { WebSocketServer } from "../types/WebSocketServer.js";

class DrawController {
	drawService: DrawService;

	constructor(wss: WebSocketServer) {
		this.drawService = new DrawService(wss);
	}

	handler: WebsocketRequestHandler = (ws, req) => {
		ws.on("message", msg => {
			const data = JSON.parse(msg.toString()) as WsMessage;

			switch (data.type) {
				case "connection":
					{
						this.drawService.connect(ws, data);
					}
					break;
				case "draw":
					{
						this.drawService.drawFigure(data);
					}
					break;
			}
		});
	};
}

export default DrawController;
