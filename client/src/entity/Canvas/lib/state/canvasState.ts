import { makeAutoObservable } from "mobx";

class CanvasState {
	canvas: HTMLCanvasElement | null = null;
	socket: WebSocket | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	setCanvas(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas;
	}

	setSocket(socket: WebSocket | null) {
		this.socket = socket;
	}
}

export default new CanvasState();
