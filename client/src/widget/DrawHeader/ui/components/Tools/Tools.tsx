import type { FC } from "react";
import { observer } from "mobx-react-lite";

import toolState, { Brush, Eraser } from "@/entity/Tool";
import { canvasState } from "@/entity/Canvas";
import Loading from "@/shared/ui/components/Loading/Loading";

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
		<menu>
			<button onClick={() => toolState.setTool(new Brush(canvas))}>
				Brush
			</button>
			<button onClick={() => toolState.setTool(new Eraser(canvas))}>
				Eraser
			</button>
		</menu>
	);
});

export default Tools;
