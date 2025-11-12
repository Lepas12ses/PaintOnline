import { Router } from "express";
import roomController from "../controller/RoomController.js";

const roomRouter = Router();

roomRouter.get("/generate-id", roomController.generateId);

export default roomRouter;
