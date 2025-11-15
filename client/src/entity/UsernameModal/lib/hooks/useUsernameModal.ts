import { useCallback, useState } from "react";

export default function useUsernameModal() {
	const [username, setUsername] = useState<string>();

	const onSubmit = useCallback((username: string) => {
		setUsername(username);
	}, []);

	return {
		username,
		onSubmit,
	};
}
