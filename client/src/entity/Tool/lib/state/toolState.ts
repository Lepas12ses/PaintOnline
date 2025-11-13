import { makeAutoObservable } from "mobx";
import type Tool from "../../model/Tool";

class ToolState {
	tool: Tool | null = null;
	fillColor: string = "#000000";
	strokeColor: string = "#000000";
	strokeWidth: number = 1;

	constructor() {
		makeAutoObservable(this);
	}

	setTool(tool: Tool | null) {
		this.tool = tool;
		if (this.tool) {
			this.tool.fillColor = this.fillColor;
			this.tool.strokeColor = this.strokeColor;
			this.tool.strokeWidth = this.strokeWidth;
		}
	}

	setFillColor(color: string) {
		this.fillColor = color;
		if (this.tool) {
			this.tool.fillColor = color;
		}
	}

	setStrokeColor(color: string) {
		this.strokeColor = color;
		if (this.tool) {
			this.tool.strokeColor = color;
		}
	}

	setStrokeWidth(width: number) {
		this.strokeWidth = width;
		if (this.tool) {
			this.tool.strokeWidth = width;
		}
	}
}

export default new ToolState();
