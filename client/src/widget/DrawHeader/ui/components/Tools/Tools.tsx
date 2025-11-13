import type { FC } from "react";
import { observer } from "mobx-react-lite";

import toolState, { Brush, Eraser } from "@/entity/Tool";
import { canvasState } from "@/entity/Canvas";
import Loading from "@/shared/ui/components/Loading/Loading";
import IconToggle from "@/shared/ui/components/IconToggle/IconToggle";
import classes from "./Tools.module.css";

import brushIcon from "../../assets/brush.svg";
import eraserIcon from "../../assets/eraser.svg";

const Tools: FC = observer(() => {
	const canvas = canvasState.canvas;
	const tool = toolState.tool;
	const fillColor = toolState.fillColor;
	const strokeColor = toolState.strokeColor;
	const strokeWidth = toolState.strokeWidth;

	if (!canvas) {
		return <Loading size='sm' />;
	}

	return (
		<menu className={classes.tools}>
			<IconToggle
				onClick={() => toolState.setTool(new Brush(canvas))}
				toggled={tool instanceof Brush}
			>
				<img src={brushIcon} alt='Brush' />
			</IconToggle>
			<IconToggle
				onClick={() => toolState.setTool(new Eraser(canvas))}
				toggled={tool instanceof Eraser}
			>
				<img src={eraserIcon} alt='Eraser' />
			</IconToggle>
		</menu>
	);
});

export default Tools;
