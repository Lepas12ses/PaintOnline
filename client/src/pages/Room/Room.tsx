import type { FC } from "react";
import useRoomId from "./lib/useRoomId";

const RoomPage: FC = () => {
	const roomId = useRoomId();

	return (
		<div>
			<p>You're in room with id: {roomId}</p>
		</div>
	);
};

export default RoomPage;
