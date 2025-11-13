import type { ComponentProps, FC } from "react";

import classes from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {
	id: string;
	label?: string;
}

const Input: FC<InputProps> = ({ id, label = "", ...props }) => {
	return (
		<div className={classes.container}>
			<label htmlFor={id}>{label}</label>
			<input id={id} name={id} {...props} />
		</div>
	);
};

export default Input;
