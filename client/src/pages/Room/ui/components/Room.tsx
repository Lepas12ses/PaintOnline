import type { FC } from "react";
import { observer } from "mobx-react-lite";

import DrawHeader from "@/widget/DrawHeader";
import DrawCanvas from "@/widget/DrawCanvas";

const RoomPage: FC = observer(() => {
	return (
		<>
			<DrawHeader />
			<DrawCanvas />
		</>
	);
});

export default RoomPage;
