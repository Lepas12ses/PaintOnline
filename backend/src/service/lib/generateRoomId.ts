export default function generateRoomId() {
	return new Date().getTime().toString(16);
}
