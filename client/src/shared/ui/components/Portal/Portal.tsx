import type { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {
	elementId: string;
}

const Portal: FC<PortalProps> = ({ children, elementId }) => {
	const element = document.getElementById(elementId);

	if (!element) throw new Error(`Cannot find element with id: ${elementId}`);

	return createPortal(children, element);
};

export default Portal;
