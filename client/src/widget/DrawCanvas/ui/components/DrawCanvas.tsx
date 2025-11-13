import Box from "@/shared/ui/components/Box/Box";
import type { FC } from "react";

import classes from "./DrawCanvas.module.css";
import Canvas from "@/entity/Canvas";

const DrawCanvas: FC = () => {
	return (
		<Box className={classes.background}>
			<Canvas />
		</Box>
	);
};

export default DrawCanvas;
