import type { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function withModalPortal(node: ReactNode) {
	const modalRoot = document.getElementById("modal");

	if (!modalRoot) {
		throw new Error("Cannot find modalRoot");
	}

	return createPortal(node, modalRoot);
}
