import type { Figure } from "@/shared/model/WsMessage/Figure";
import { makeAutoObservable } from "mobx";
import drawWithSavedOptions from "../helper/drawWithSavedOptions";
import type { WsMessage } from "@/shared/model/WsMessage/WsMessage";

class CanvasState {
	canvas: HTMLCanvasElement | null = null;
	socket: WebSocket | null = null;
	roomId: string | null = null;
	sendFigure = (figure: Figure) => {
		console.log(this.roomId);

		if (!this.socket || !this.roomId) return;

		const message: WsMessage = {
			type: "draw",
			id: this.roomId,
			figure,
		};
		this.socket.send(JSON.stringify(message));
	};

	constructor() {
		makeAutoObservable(this);
	}

	setCanvas(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas;
	}

	setSocket(socket: WebSocket | null) {
		this.socket = socket;
	}

	setRoomId(roomId: string | null) {
		this.roomId = roomId;
	}

	draw(figure: Figure) {
		if (!this.canvas) return;

		drawWithSavedOptions(this.canvas, ctx => {
			switch (figure.type) {
				case "brush":
					{
						const { path, strokeWidth, strokeColor } = figure;
						if (!path.length) return;

						ctx.strokeStyle = strokeColor;
						ctx.lineWidth = strokeWidth;

						ctx.beginPath();
						ctx.moveTo(path[0].x, path[0].y);
						for (let i = 1; i < path.length; i++) {
							const { x, y } = path[i];

							ctx.lineTo(x, y);
						}
						ctx.stroke();
					}
					break;
				case "eraser":
					{
						const { path, strokeWidth } = figure;
						if (!path.length) return;

						ctx.strokeStyle = "#ffffff";
						ctx.lineWidth = strokeWidth;

						ctx.beginPath();
						ctx.moveTo(path[0].x, path[0].y);
						for (let i = 1; i < path.length; i++) {
							const { x, y } = path[i];

							ctx.lineTo(x, y);
						}
						ctx.stroke();
					}
					break;
				case "line":
					{
						const { start, end, strokeWidth, strokeColor } = figure;

						ctx.strokeStyle = strokeColor;
						ctx.lineWidth = strokeWidth;

						ctx.beginPath();
						ctx.moveTo(start.x, start.y);
						ctx.lineTo(end.x, end.y);
						ctx.stroke();
					}
					break;
				case "rect":
					{
						const { size, position, fillColor } = figure;

						ctx.fillStyle = fillColor;

						ctx.fillRect(position.x, position.y, size.x, size.y);
					}
					break;
				case "circle":
					{
						const { radius, position, fillColor } = figure;

						ctx.fillStyle = fillColor;

						ctx.beginPath();
						ctx.ellipse(
							position.x,
							position.y,
							radius,
							radius,
							0,
							0,
							Math.PI * 2
						);
						ctx.fill();
					}
					break;
			}
		});
	}
}

export default new CanvasState();
