import type { FC, PropsWithChildren } from "react";

import classes from "./Box.module.css";

interface BoxProps extends PropsWithChildren {
	fill?: "screen" | "container" | "containerw" | "containerh";
	className?: string;
}

const Box: FC<BoxProps> = ({ children, fill = "screen", className = "" }) => {
	const fillClass = classes[`box_${fill}`];

	return (
		<div className={`${classes.box} ${fillClass} ${className}`}>{children}</div>
	);
};

export default Box;
