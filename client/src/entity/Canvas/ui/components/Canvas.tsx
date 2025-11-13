import { useEffect, useRef, type FC } from "react";
import canvasState from "../../lib/state/canvasState";

import classes from "./Canvas.module.css";

const Canvas: FC = () => {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		if (canvas) {
			canvasState.setCanvas(canvas);

			return () => {
				canvasState.setCanvas(null);
			};
		}
	}, []);

	return (
		<canvas className={classes.canvas} ref={ref} width={900} height={600} />
	);
};

export default Canvas;
