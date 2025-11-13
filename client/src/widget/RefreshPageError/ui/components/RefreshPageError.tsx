import ErrorDisplay from "@/entity/ErrorDisplay";
import Box from "@/shared/ui/components/Box/Box";
import Button from "@/shared/ui/components/Button/Button";
import type { FC } from "react";

interface RefreshPageErrorProps {
	title?: string;
	content?: string;
}

const RefreshPageError: FC<RefreshPageErrorProps> = ({
	title = "",
	content = "",
}) => {
	const handleRefresh = () => window.location.reload();

	return (
		<ErrorDisplay
			title={title}
			content={content}
			actionsSlot={() => (
				<Box fill='containerw'>
					<Button onClick={handleRefresh}>Refresh page</Button>
				</Box>
			)}
		/>
	);
};

export default RefreshPageError;
