import type { Figure } from "@/shared/model/WsMessage/Figure";
import Tool from "./Tool";
import type { Point } from "motion";

export default class Eraser extends Tool {
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
}
