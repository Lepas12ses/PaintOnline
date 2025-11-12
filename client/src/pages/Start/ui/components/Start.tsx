import type { FC } from "react";
import { Navigate } from "react-router-dom";

import useRoomIdQuery from "../../lib/hooks/useRoomIdQuery";
import ScreenLoading from "@/shared/ui/components/ScreenLoading/ScreenLoading";

const StartPage: FC = () => {
	const { roomId, isPending, isError } = useRoomIdQuery();

	if (isPending) {
		return <ScreenLoading />;
	}

	if (isError) {
		return <p>Something wrong happened</p>;
	}

	return <Navigate to={`/${roomId}`} replace />;
};

export default StartPage;
