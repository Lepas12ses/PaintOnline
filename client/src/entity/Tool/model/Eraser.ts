import type { Figure } from "@/shared/model/WsMessage/Figure";
import Tool from "./Tool";

export default class Eraser extends Tool {
	isDown = false;
	path: { x: number; y: number }[] = [];

	constructor(
		canvas: HTMLCanvasElement,
		onDraw: (figure: Figure) => void = () => {}
	) {
		super(canvas, onDraw);
		this.listen();
	}

	set strokeColor(color: string) {
		this.canvasContext.strokeStyle = "#ffffff";
	}

	protected mouseDownHandler(e: MouseEvent) {
		this.canvasContext.moveTo(e.offsetX, e.offsetY);
		this.canvasContext.beginPath();
		this.isDown = true;
		this.path = [];
	}
	protected mouseUpHandler() {
		this.isDown = false;

		const figure: Figure = {
			type: "eraser",
			path: this.path,
			strokeWidth: this.canvasContext.lineWidth,
		};
		this.onDraw(figure);

		this.path = [];
	}
	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			const x = e.offsetX;
			const y = e.offsetY;
			this.canvasContext.lineTo(x, y);
			this.canvasContext.stroke();

			this.path.push({ x, y });
		}
	}

	protected listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}
}
