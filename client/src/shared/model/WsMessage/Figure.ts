type FigureType = "brush" | "eraser" | "line" | "rect" | "circle";

interface IFigure {
	type: FigureType;
}

interface Brush extends IFigure {
	type: "brush";
	path: {
		x: number;
		y: number;
	}[];
	strokeColor: string;
	strokeWidth: number;
}

interface Eraser extends IFigure {
	type: "eraser";
	path: {
		x: number;
		y: number;
	}[];
	strokeWidth: number;
}

interface Line extends IFigure {
	type: "line";
	start: {
		x: number;
		y: number;
	};
	end: {
		x: number;
		y: number;
	};
	strokeColor: string;
	strokeWidth: number;
}

interface Rect extends IFigure {
	type: "rect";
	position: {
		x: number;
		y: number;
	};
	size: {
		x: number;
		y: number;
	};
	fillColor: string;
}

interface Circle extends IFigure {
	type: "circle";
	position: {
		x: number;
		y: number;
	};
	radius: number;
	fillColor: string;
}

interface FinishFigure {
	type: "finish";
}

export type Figure = Brush | Eraser | Line | Rect | Circle | FinishFigure;
