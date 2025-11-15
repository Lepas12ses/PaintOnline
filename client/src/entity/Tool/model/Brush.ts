import type { Point } from "motion";
import Tool from "./Tool";
import type { Figure } from "@/shared/model/WsMessage/Figure";

export default class Brush extends Tool {
	isDown = false;
	path: Point[] = [];

	constructor(
		canvas: HTMLCanvasElement,
		onDraw: (figure: Figure) => void = () => {}
	) {
		super(canvas, onDraw);
		this.listen(
			this.mouseDownHandler.bind(this),
			this.mouseUpHandler.bind(this),
			this.mouseMoveHandler.bind(this)
		);
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
			type: "brush",
			path: this.path,
			strokeColor: this.canvasContext.strokeStyle.toString(),
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
}
