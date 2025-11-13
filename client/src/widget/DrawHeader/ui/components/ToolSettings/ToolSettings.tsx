import type { FC } from "react";

import classes from "./ToolSettings.module.css";
import ColorPicker from "@/shared/ui/components/ColorPicker/ColorPicker";
import { observer } from "mobx-react-lite";
import toolState from "@/entity/Tool/lib/state/toolState";
import Input from "@/shared/ui/components/Input/Input";

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
			<Input
				id='stroke-width'
				label='Stroke width'
				value={strokeWidth}
				type='number'
				onChange={e => {
					const value = parseInt(e.target.value);
					if (value < 1) return;
					toolState.setStrokeWidth(value);
				}}
			/>
		</menu>
	);
});

export default ToolSettings;
