import type { FC } from "react";

import classes from "./ScreenLoading.module.css";

const ScreenLoading: FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.box}>
				<p>Loading ...</p>
			</div>
		</div>
	);
};

export default ScreenLoading;
