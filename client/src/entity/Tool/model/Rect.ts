import type { Figure } from "@/shared/model/WsMessage/Figure";
import onCanvasRestore from "../lib/helper/onCanvasRestore";
import Tool from "./Tool";

export default class Rect extends Tool {
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

		const width = e.offsetX - this.startX;
		const height = e.offsetY - this.startY;

		const figure: Figure = {
			type: "rect",
			position: {
				x: this.startX,
				y: this.startY,
			},
			size: {
				x: width,
				y: height,
			},
			fillColor: this.canvasContext.fillStyle.toString(),
		};
		this.onDraw(figure);
	}

	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			onCanvasRestore(this.canvas, this.canvasContext, this.savedImage, () => {
				this.canvasContext.beginPath();
				this.canvasContext.fillRect(
					this.startX,
					this.startY,
					e.offsetX - this.startX,
					e.offsetY - this.startY
				);
			});
		}
	}

	protected listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}
}
