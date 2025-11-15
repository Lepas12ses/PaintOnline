import type { Figure } from "@/shared/model/WsMessage/Figure";
import onCanvasRestore from "../lib/helper/onCanvasRestore";
import Tool from "./Tool";

export default class Line extends Tool {
	isDown = false;
	savedImage = "";
	startX = 0;
	startY = 0;

	constructor(
		canvas: HTMLCanvasElement,
		onDraw: (figure: Figure) => void = () => {}
	) {
		super(canvas, onDraw);
		this.listen();
	}

	protected mouseDownHandler(e: MouseEvent) {
		this.startX = e.offsetX;
		this.startY = e.offsetY;

		this.isDown = true;
		this.savedImage = this.canvas.toDataURL();
	}

	protected mouseUpHandler(e: MouseEvent) {
		this.isDown = false;

		const endX = e.offsetX;
		const endY = e.offsetY;

		const figure: Figure = {
			type: "line",
			start: {
				x: this.startX,
				y: this.startY,
			},
			end: {
				x: endX,
				y: endY,
			},
			strokeColor: this.canvasContext.strokeStyle.toString(),
			strokeWidth: this.canvasContext.lineWidth,
		};
		this.onDraw(figure);
	}

	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			onCanvasRestore(this.canvas, this.canvasContext, this.savedImage, () => {
				this.canvasContext.beginPath();
				this.canvasContext.moveTo(this.startX, this.startY);
				this.canvasContext.lineTo(e.offsetX, e.offsetY);
				this.canvasContext.stroke();
			});
		}
	}

	protected listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}
}
