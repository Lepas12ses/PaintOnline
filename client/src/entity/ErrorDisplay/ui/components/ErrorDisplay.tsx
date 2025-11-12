import type { FC, ReactNode } from "react";

import classes from "./ErrorDisplay.module.css";

interface ErrorDisplayProps {
	titleSlot: () => ReactNode;
	contentSlot: () => ReactNode;
	actionsSlot: () => ReactNode;
}

const ErrorDisplay: FC<ErrorDisplayProps> = ({
	titleSlot,
	contentSlot,
	actionsSlot,
}) => {
	return (
		<div className={classes.card}>
			<div>
				{titleSlot()}
				<hr />
				{contentSlot()}
			</div>
			<div className={classes.actions}>{actionsSlot()}</div>
		</div>
	);
};

export default ErrorDisplay;
