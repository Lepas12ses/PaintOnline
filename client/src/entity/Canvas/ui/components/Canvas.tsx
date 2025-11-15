import { useEffect, useRef, type FC } from "react";
import canvasState from "../../lib/state/canvasState";

import classes from "./Canvas.module.css";

interface CanvasProps {
	username: string;
	roomId: string;
}

const Canvas: FC<CanvasProps> = ({ username, roomId }) => {
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

	useEffect(() => {
		const ws = new WebSocket("ws://localhost:5000/");

		const closeConnection = () => {
			ws.close();
		};

		ws.onopen = () => {
			ws.send(
				JSON.stringify({
					id: roomId,
					username: username,
					type: "connection",
				})
			);
		};
		ws.onmessage = event => {
			const msg = JSON.parse(event.data);

			console.log(msg);
		};

		return closeConnection;
	});

	return (
		<canvas className={classes.canvas} ref={ref} width={900} height={600} />
	);
};

export default Canvas;
