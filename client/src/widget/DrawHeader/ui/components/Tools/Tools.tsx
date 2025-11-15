import type { FC } from "react";
import { observer } from "mobx-react-lite";

import toolState, { Brush, Circle, Eraser, Line, Rect } from "@/entity/Tool";
import { canvasState } from "@/entity/Canvas";
import Loading from "@/shared/ui/components/Loading/Loading";
import IconToggle from "@/shared/ui/components/IconToggle/IconToggle";
import classes from "./Tools.module.css";

import brushIcon from "../../assets/brush.svg";
import eraserIcon from "../../assets/eraser.svg";
import lineIcon from "../../assets/line.svg";
import rectIcon from "../../assets/rect.svg";
import circleIcon from "../../assets/circle.svg";

const Tools: FC = observer(() => {
	const { canvas, socket, roomId, sendFigure } = canvasState;
	const tool = toolState.tool;

	if (!canvas || !socket || !roomId) {
		return <Loading size='sm' />;
	}

	return (
		<menu className={classes.tools}>
			<IconToggle
				onClick={() => {
					if (tool instanceof Brush) toolState.unsetTool();
					else toolState.setTool(new Brush(canvas, sendFigure));
				}}
				toggled={tool instanceof Brush}
			>
				<img src={brushIcon} alt='Brush' />
			</IconToggle>
			<IconToggle
				onClick={() => {
					if (tool instanceof Eraser) toolState.unsetTool();
					else toolState.setTool(new Eraser(canvas, sendFigure));
				}}
				toggled={tool instanceof Eraser}
			>
				<img src={eraserIcon} alt='Eraser' />
			</IconToggle>
			<IconToggle
				onClick={() => {
					if (tool instanceof Line) toolState.unsetTool();
					else toolState.setTool(new Line(canvas, sendFigure));
				}}
				toggled={tool instanceof Line}
			>
				<img src={lineIcon} alt='Line' />
			</IconToggle>
			<IconToggle
				onClick={() => {
					if (tool instanceof Rect) toolState.unsetTool();
					else toolState.setTool(new Rect(canvas, sendFigure));
				}}
				toggled={tool instanceof Rect}
			>
				<img src={rectIcon} alt='Rect' />
			</IconToggle>
			<IconToggle
				onClick={() => {
					if (tool instanceof Circle) toolState.unsetTool();
					else toolState.setTool(new Circle(canvas, sendFigure));
				}}
				toggled={tool instanceof Circle}
			>
				<img src={circleIcon} alt='Circle' />
			</IconToggle>
		</menu>
	);
});

export default Tools;
