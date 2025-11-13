import { type FC } from "react";
import { Navigate } from "react-router-dom";

import useRoomIdQuery from "../../lib/hooks/useRoomIdQuery";
import Loading from "@/shared/ui/components/Loading/Loading";
import Box from "@/shared/ui/components/Box/Box";
import RefreshPageError from "@/widget/RefreshPageError";

const StartPage: FC = () => {
	const { roomId, isPending, isError } = useRoomIdQuery();

	if (isPending) {
		return (
			<Box>
				<Loading />
			</Box>
		);
	}

	if (isError) {
		return (
			<Box>
				<RefreshPageError
					title='Something wrong happened'
					content='The Internet connection may have been lost.'
				/>
			</Box>
		);
	}

	return <Navigate to={`/${roomId}`} replace />;
};

export default StartPage;
