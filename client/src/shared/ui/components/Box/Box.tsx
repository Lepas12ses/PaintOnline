import type { FC, PropsWithChildren } from "react";

import classes from "./Box.module.css";

interface BoxProps extends PropsWithChildren {
	fill?: "screen" | "container" | "containerw" | "containerh";
}

const Box: FC<BoxProps> = ({ children, fill = "screen" }) => {
	const fillClass = classes[`box_${fill}`];

	return <div className={`${classes.box} ${fillClass}`}>{children}</div>;
};

export default Box;
