import type { FC } from "react";
import { Navigate } from "react-router-dom";
import generateRoomId from "../../lib/helper/generateRoomId";

const StartPage: FC = () => {
	const roomId = generateRoomId();

	return <Navigate to={`/${roomId}`} replace />;
};

export default StartPage;
