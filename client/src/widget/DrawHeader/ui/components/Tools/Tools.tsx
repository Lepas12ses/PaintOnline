import type { FC } from "react";
import toolState from "@/entity/Tool";
import { observer } from "mobx-react-lite";
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

	return <menu></menu>;
});

export default Tools;
