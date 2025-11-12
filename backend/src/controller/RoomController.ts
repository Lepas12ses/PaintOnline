import type { RequestHandler } from "express";
import roomService from "../service/RoomService/RoomService.js";

class RoomController {
	generateId: RequestHandler = async (req, res) => {
		const roomId = roomService.generateRoomId();

		await new Promise(resolve => setTimeout(resolve, 3000));

		res.json({
			roomId,
		});
	};
}

const roomController = new RoomController();

export default roomController;
