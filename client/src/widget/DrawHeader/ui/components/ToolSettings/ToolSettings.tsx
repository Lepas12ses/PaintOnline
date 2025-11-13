import type { FC } from "react";

import classes from "./ToolSettings.module.css";
import ColorPicker from "@/shared/ui/components/ColorPicker/ColorPicker";
import { observer } from "mobx-react-lite";
import toolState from "@/entity/Tool/lib/state/toolState";

const ToolSettings: FC = observer(() => {
	const fillColor = toolState.fillColor;
	const strokeColor = toolState.strokeColor;
	const strokeWidth = toolState.strokeWidth;

	return (
		<menu className={classes.settings}>
			<ColorPicker
				id='stroke-color'
				label='Stroke color'
				value={strokeColor}
				onChange={e => {
					toolState.setStrokeColor(e.target.value);
				}}
			/>
			<ColorPicker
				id='fill-color'
				label='Fill color'
				value={fillColor}
				onChange={e => {
					toolState.setFillColor(e.target.value);
				}}
			/>
		</menu>
	);
});

export default ToolSettings;
