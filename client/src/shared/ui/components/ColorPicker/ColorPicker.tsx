import type { ComponentProps, FC } from "react";

import classes from "./ColorPicker.module.css";

interface ColorPickerProps extends ComponentProps<"input"> {
	id: string;
	label?: string;
}

const ColorPicker: FC<ColorPickerProps> = ({ id, label = "", ...props }) => {
	return (
		<div className={classes.container}>
			<label htmlFor={id}>{label}</label>
			<input type='color' id={id} name={id} {...props} />
		</div>
	);
};

export default ColorPicker;
