import api from "@/shared/api/api";
import type RoomIdResponse from "./RoomIdResponse";

export default async function fetchRoomId() {
	const res = await api.get<RoomIdResponse>("/room/generate-id");

	const data = res.data;

	return data;
}
