import { useEffect, useRef, type FC } from "react";
import canvasState from "../../lib/state/canvasState";

import classes from "./Canvas.module.css";
import type { WsMessage } from "@/shared/model/WsMessage/WsMessage";

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
			const data = JSON.parse(event.data) as WsMessage;

			switch (data.type) {
				case "connection":
					{
						console.log(`${data.username} connected`);
					}
					break;
				case "draw":
					{
						const { figure } = data;

						canvasState.draw(figure);
					}
					break;
			}
		};

		canvasState.setSocket(ws);
		canvasState.setRoomId(roomId);

		return closeConnection;
	}, [roomId, username]);

	return (
		<canvas className={classes.canvas} ref={ref} width={900} height={600} />
	);
};

export default Canvas;
