import type { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

import classes from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
	className?: string;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, className = "", onClick }) => {
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
			<button className={`${classes.button} ${className}`} onClick={onClick}>
				{children}
			</button>
		</motion.span>
	);
};

export default Button;
