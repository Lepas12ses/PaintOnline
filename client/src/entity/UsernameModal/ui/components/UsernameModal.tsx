import useModal from "@/shared/lib/hooks/useModal";
import Modal from "@/shared/ui/components/Modal/Modal";
import { useRef, type FC } from "react";

import classes from "./UsernameModal.module.css";
import Input from "@/shared/ui/components/Input/Input";
import Button from "@/shared/ui/components/Button/Button";

interface UsernameModal {
	onSubmit?: (username: string) => void;
}

const UsernameModal: FC<UsernameModal> = ({ onSubmit = () => {} }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { isOpen, close } = useModal(true);

	function handleSubmit() {
		const value = inputRef.current?.value;
		if (value) {
			onSubmit(value);
			close();
		}
	}

	return (
		<Modal isOpen={isOpen}>
			<div className={classes.container}>
				<Input ref={inputRef} id='username' label='Your username:' />
				<Button onClick={handleSubmit}>Submit</Button>
			</div>
		</Modal>
	);
};

export default UsernameModal;
