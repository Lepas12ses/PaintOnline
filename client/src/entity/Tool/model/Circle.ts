import type { Figure } from "@/shared/model/WsMessage/Figure";
import onCanvasRestore from "../lib/helper/onCanvasRestore";
import Tool from "./Tool";
import type { Point } from "motion";

export default class Circle extends Tool {
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

		const radius = Math.min(
			Math.abs(this.end.x - this.start.x),
			Math.abs(this.end.y - this.start.y)
		);

		const figure: Figure = {
			type: "circle",
			position: this.start,
			radius: radius,
			fillColor: this.canvasContext.fillStyle.toString(),
		};
		this.onDraw(figure);
	}

	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			this.end = {
				x: e.offsetX,
				y: e.offsetY,
			};
			onCanvasRestore(this.canvas, this.canvasContext, this.savedImage, () => {
				this.canvasContext.beginPath();
				const radius = Math.min(
					Math.abs(this.end.x - this.start.x),
					Math.abs(this.end.y - this.start.y)
				);
				this.canvasContext.ellipse(
					this.start.x,
					this.start.y,
					radius,
					radius,
					0,
					0,
					Math.PI * 2
				);
				this.canvasContext.fill();
			});
		}
	}
}
