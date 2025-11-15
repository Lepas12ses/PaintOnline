import onCanvasRestore from "../lib/helper/onCanvasRestore";
import Tool from "./Tool";

export default class Circle extends Tool {
	isDown = false;
	savedImage = "";
	startX = 0;
	startY = 0;

	constructor(canvas: HTMLCanvasElement) {
		super(canvas);
		this.listen();
	}

	protected mouseDownHandler(e: MouseEvent) {
		this.startX = e.offsetX;
		this.startY = e.offsetY;

		this.isDown = true;
		this.savedImage = this.canvas.toDataURL();
	}

	protected mouseUpHandler() {
		this.isDown = false;
	}

	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			onCanvasRestore(this.canvas, this.canvasContext, this.savedImage, () => {
				this.canvasContext.beginPath();
				const radius = Math.min(
					Math.abs(e.offsetX - this.startX),
					Math.abs(e.offsetY - this.startY)
				);
				this.canvasContext.ellipse(
					this.startX,
					this.startY,
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

	protected listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}
}
