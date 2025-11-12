import type { FC } from "react";
import useRoomIdQuery from "../../lib/hooks/useRoomIdQuery";
import ScreenLoading from "@/shared/ui/components/ScreenLoading/ScreenLoading";

const StartPage: FC = () => {
	const { roomId, isPending, isError } = useRoomIdQuery();

	if (isPending) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Something wrong happened</p>;
	}

	// return <Navigate to={`/${roomId}`} replace />;
	return <ScreenLoading />;
};

export default StartPage;
