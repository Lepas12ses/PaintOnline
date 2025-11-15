import express from "express";
import expressWs from "express-ws";
import { config } from "dotenv";
import cors from "cors";

import wsRouter, { mountRouter } from "./route/WsRouter.js";
import roomRouter from "./route/RoomRouter.js";

config();

const PORT = process.env.PORT || 5000;

const WSServer = expressWs(express());
const { app, applyTo, getWss } = WSServer;
applyTo(wsRouter);
mountRouter(getWss());

app.use(cors());
app.use("/", wsRouter);
app.use("/room", roomRouter);

app.listen(PORT, err => {
	if (!err) {
		console.log(`Сервер запущен на порте: ${PORT}`);
	}
});
