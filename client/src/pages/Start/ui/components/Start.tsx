import { type FC } from "react";
import { Navigate } from "react-router-dom";

import useRoomIdQuery from "../../lib/hooks/useRoomIdQuery";
import ScreenLoading from "@/widget/ScreenLoading";
import Button from "@/shared/ui/component/Button/Button";

const StartPage: FC = () => {
	const { roomId, isPending, isError } = useRoomIdQuery();

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Button>Hello</Button>
		</div>
	);

	if (isPending) {
		return <ScreenLoading />;
	}

	if (isError) {
		return <p>Something wrong happened</p>;
	}

	return <Navigate to={`/${roomId}`} replace />;
};

export default StartPage;
