import { useParams } from "react-router-dom";

export default function useRoomId() {
	const { roomId } = useParams();

	if (!roomId) {
		throw new Error("Cannot extract roomId from search params");
	}

	return roomId;
}
