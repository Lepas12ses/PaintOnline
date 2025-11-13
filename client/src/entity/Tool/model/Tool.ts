export default class Tool {
	canvasContext: CanvasRenderingContext2D;

	constructor(context: CanvasRenderingContext2D) {
		this.canvasContext = context;
	}

	set fillColor(color: string) {
		this.canvasContext.fillStyle = color;
	}

	set strokeColor(color: string) {
		this.canvasContext.strokeStyle = color;
	}

	set strokeWidth(width: number) {
		this.canvasContext.lineWidth = width;
	}
}
