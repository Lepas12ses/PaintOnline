import type { Figure } from "@/shared/model/WsMessage/Figure";
import onCanvasRestore from "../lib/helper/onCanvasRestore";
import Tool from "./Tool";
import type { Point } from "motion";

export default class Line extends Tool {
	isDown = false;
	savedImage = "";
	start: Point = {
		x: 0,
		y: 0,
	};
	end: Point = {
		x: 0,
		y: 0,
	};

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
		this.start = {
			x: e.offsetX,
			y: e.offsetY,
		};

		this.isDown = true;
		this.savedImage = this.canvas.toDataURL();
	}

	protected mouseUpHandler() {
		this.isDown = false;

		const figure: Figure = {
			type: "line",
			start: this.start,
			end: this.end,
			strokeColor: this.canvasContext.strokeStyle.toString(),
			strokeWidth: this.canvasContext.lineWidth,
		};
		this.onDraw(figure);
	}

	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			this.end = { x: e.offsetX, y: e.offsetY };
			onCanvasRestore(this.canvas, this.canvasContext, this.savedImage, () => {
				this.canvasContext.beginPath();
				this.canvasContext.moveTo(this.start.x, this.start.y);
				this.canvasContext.lineTo(this.end.x, this.end.y);
				this.canvasContext.stroke();
			});
		}
	}
}
