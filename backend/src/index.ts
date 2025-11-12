import express from "express";
import expressWs from "express-ws";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 5000;

const app = express();
const WSServer = expressWs(app);

app.listen(PORT, err => {
	if (!err) {
		console.log(`Сервер запущен на порте: ${PORT}`);
	}
});
