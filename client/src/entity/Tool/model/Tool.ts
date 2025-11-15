import type { Figure } from "@/shared/model/WsMessage/Figure";

export default class Tool {
	protected canvas: HTMLCanvasElement;
	protected canvasContext: CanvasRenderingContext2D;
	protected onDraw: (figure: Figure) => void;

	constructor(
		canvas: HTMLCanvasElement,
		onDraw: (figure: Figure) => void = () => {}
	) {
		this.canvas = canvas;
		const canvasContext = canvas.getContext("2d");
		if (!canvasContext) {
			throw new Error("Cannot get canvas 2d context");
		}
		this.canvasContext = canvasContext;
		this.onDraw = onDraw;

		this.destroyEvents();
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

	destroyEvents() {
		this.canvas.onmousedown = null;
		this.canvas.onmouseup = null;
		this.canvas.onmousemove = null;
	}
}
