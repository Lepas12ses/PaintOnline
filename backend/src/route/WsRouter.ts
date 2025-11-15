import { Router } from "express";
import type expressWs from "express-ws";

import DrawController from "../controller/DrawController.js";

const wsRouter = Router();

export function mountRouter(wss: ReturnType<expressWs.Instance["getWss"]>) {
	const drawController = new DrawController(wss);

	wsRouter.ws("/", drawController.handler);
}

export default wsRouter;
