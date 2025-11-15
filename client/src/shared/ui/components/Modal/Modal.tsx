import Portal from "@/shared/ui/components/Portal/Portal";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, type FC, type PropsWithChildren } from "react";
import classes from "./Modal.module.css";

interface ModalProps extends PropsWithChildren {
	isOpen: boolean;
	onClose?: () => void;
}

const Modal: FC<ModalProps> = ({
	children,
	isOpen = false,
	onClose = () => {},
}) => {
	const modalRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen) {
			modalRef.current?.showModal();
		} else {
			modalRef.current?.close();
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<Portal elementId='modal'>
					<motion.dialog
						className={classes.modal}
						ref={modalRef}
						variants={{
							INITIAL: {
								translateY: -5,
							},
							ENTER: {
								translateY: 0,
							},
							EXIT: {
								translateY: 5,
							},
						}}
						initial='INITIAL'
						animate='ENTER'
						exit='EXIT'
						onClose={onClose}
					>
						{children}
					</motion.dialog>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default Modal;
