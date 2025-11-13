import type { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

import classes from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
	className?: string;
	onClick?: () => void;
	variant?: "fill" | "outline";
}

const Button: FC<ButtonProps> = ({
	children,
	className = "",
	variant = "fill",
	onClick,
}) => {
	let variantClass;
	switch (variant) {
		case "fill":
			variantClass = classes["button_fill"];
			break;
		case "outline":
			variantClass = classes["button_outline"];
			break;
	}

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
				className={`${classes.button} ${variantClass} ${className}`}
				onClick={onClick}
			>
				{children}
			</button>
		</motion.span>
	);
};

export default Button;
