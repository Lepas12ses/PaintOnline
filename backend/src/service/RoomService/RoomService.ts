import generateRoomId from "../lib/generateRoomId.js";

class RoomService {
	generateRoomId() {
		return generateRoomId();
	}
}

const roomService = new RoomService();

export default roomService;
