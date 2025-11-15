import Box from "@/shared/ui/components/Box/Box";
import type { FC } from "react";

import classes from "./DrawCanvas.module.css";
import Canvas from "@/entity/Canvas";
import UsernameModal, { useUsernameModal } from "@/entity/UsernameModal";
import Loading from "@/shared/ui/components/Loading/Loading";
import { useParams } from "react-router-dom";

const DrawCanvas: FC = () => {
	const { roomId } = useParams();
	const { username, onSubmit: submitUsername } = useUsernameModal();

	return (
		<>
			<UsernameModal onSubmit={submitUsername} />
			<Box className={classes.background}>
				{username && roomId ? (
					<Canvas username={username} roomId={roomId} />
				) : (
					<Loading size='lg' />
				)}
			</Box>
		</>
	);
};

export default DrawCanvas;
