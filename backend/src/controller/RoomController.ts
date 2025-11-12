import type { RequestHandler } from "express";
import roomService from "../service/RoomService/RoomService.js";

class RoomController {
	generateId: RequestHandler = (req, res) => {
		const roomId = roomService.generateRoomId();

		res.json({
			roomId,
		});
	};
}

const roomController = new RoomController();

export default roomController;
