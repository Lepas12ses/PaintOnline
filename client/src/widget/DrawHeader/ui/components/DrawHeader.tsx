import { observer } from "mobx-react-lite";
import type { FC } from "react";

import classes from "./DrawHeader.module.css";
import Tools from "./Tools/Tools";

const DrawHeader: FC = observer(() => {
	return (
		<header className={classes.header}>
			<Tools />
		</header>
	);
});

export default DrawHeader;
