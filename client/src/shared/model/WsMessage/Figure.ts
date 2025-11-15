import type { Point } from "motion";

type FigureType = "brush" | "eraser" | "line" | "rect" | "circle";

interface IFigure {
	type: FigureType;
}

interface Brush extends IFigure {
	type: "brush";
	path: Point[];
	strokeColor: string;
	strokeWidth: number;
}

interface Eraser extends IFigure {
	type: "eraser";
	path: Point[];
	strokeWidth: number;
}

interface Line extends IFigure {
	type: "line";
	start: Point;
	end: Point;
	strokeColor: string;
	strokeWidth: number;
}

interface Rect extends IFigure {
	type: "rect";
	position: Point;
	size: Point;
	fillColor: string;
}

interface Circle extends IFigure {
	type: "circle";
	position: Point;
	radius: number;
	fillColor: string;
}

export type Figure = Brush | Eraser | Line | Rect | Circle;
