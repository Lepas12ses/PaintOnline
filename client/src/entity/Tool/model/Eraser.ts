import Tool from "./Tool";

export default class Eraser extends Tool {
	isDown = false;

	constructor(canvas: HTMLCanvasElement) {
		super(canvas);
		this.listen();
	}

	set strokeColor(color: string) {
		this.canvasContext.strokeStyle = "#ffffff";
	}

	protected mouseDownHandler(e: MouseEvent) {
		this.canvasContext.moveTo(e.offsetX, e.offsetY);
		this.canvasContext.beginPath();
		this.isDown = true;
	}
	protected mouseUpHandler() {
		this.isDown = false;
	}
	protected mouseMoveHandler(e: MouseEvent) {
		if (this.isDown) {
			this.canvasContext.lineTo(e.offsetX, e.offsetY);
			this.canvasContext.stroke();
		}
	}

	protected listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}
}
