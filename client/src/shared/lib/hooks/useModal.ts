import { useCallback, useState } from "react";

export default function useModal(defaultOpen: (() => boolean) | boolean) {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	const open = useCallback(() => {
		setIsOpen(true);
	}, []);

	return {
		isOpen,
		open,
		close,
	};
}
