import Box from "@/shared/ui/components/Box/Box";
import type { FC } from "react";

import classes from "./DrawCanvas.module.css";
import Canvas from "@/entity/Canvas";
import UsernameModal, { useUsernameModal } from "@/entity/UsernameModal";

const DrawCanvas: FC = () => {
	const { username, onSubmit: submitUsername } = useUsernameModal();

	console.log(username);

	return (
		<>
			<UsernameModal onSubmit={submitUsername} />
			<Box className={classes.background}>
				<Canvas />
			</Box>
		</>
	);
};

export default DrawCanvas;
