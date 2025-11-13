import { observer } from "mobx-react-lite";
import type { FC } from "react";

import classes from "./DrawHeader.module.css";
import Tools from "./Tools/Tools";
import ToolSettings from "./ToolSettings/ToolSettings";

const DrawHeader: FC = observer(() => {
	return (
		<header className={classes.header}>
			<Tools />
			<ToolSettings />
		</header>
	);
});

export default DrawHeader;
