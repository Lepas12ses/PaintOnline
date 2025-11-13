import type { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

import classes from "./IconToggle.module.css";

interface IconToggleProps extends PropsWithChildren {
	toggled?: boolean;
	className?: string;
	onClick?: () => void;
}

const IconToggle: FC<IconToggleProps> = ({
	children,
	className = "",
	toggled = false,
	onClick,
}) => {
	return (
		<motion.span
			initial={{
				scale: 1,
			}}
			whileHover={{
				scale: 1.2,
				transition: {
					duration: 0.1,
				},
			}}
		>
			<button
				className={`${classes["icon-toggle"]} ${
					toggled ? classes["icon-toggle_toggled"] : ""
				} ${className}`}
				onClick={onClick}
			>
				{children}
			</button>
		</motion.span>
	);
};

export default IconToggle;
