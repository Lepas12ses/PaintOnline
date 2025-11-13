import type { FC, ReactNode } from "react";

import classes from "./ErrorDisplay.module.css";

interface ErrorDisplayProps {
	title?: string;
	content?: string;
	actionsSlot?: () => ReactNode;
}

const ErrorDisplay: FC<ErrorDisplayProps> = ({
	title = "",
	content = "",
	actionsSlot,
}) => {
	return (
		<div className={classes.card}>
			<div className={classes.content}>
				<p className={classes.title}>{title}</p>
				<hr />
				<p>{content}</p>
			</div>
			<div className={classes.actions}>{actionsSlot?.()}</div>
		</div>
	);
};

export default ErrorDisplay;
