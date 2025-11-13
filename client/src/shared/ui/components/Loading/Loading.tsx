import type { FC } from "react";

import classes from "./Loading.module.css";

interface LoadingProps {
	size?: "sm" | "md" | "lg";
}

const Loading: FC<LoadingProps> = ({ size = "md" }) => {
	const sizeClass = classes[`loading_${size}`];

	return <p className={`${classes.loading} ${sizeClass}`}>Loading ...</p>;
};

export default Loading;
