import { Button } from "../../../shared/button";
import {
	Card,
	CardActions,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../../shared/card";
import { EndpointForm } from "../EndpointForm";
import type { EndpointListFormPanelProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointListFormPanel = ({
	isVisible,
	selectedEndpoint,
	onSubmit,
	onCancel,
}: EndpointListFormPanelProps) => {
	if (!isVisible) {
		return null;
	}

	return (
		<Card className="max-w-3xl">
			<CardHeader>
				<CardTitle className="text-xl">
					{selectedEndpoint ? "Edit endpoint" : "Create endpoint"}
				</CardTitle>
				<CardDescription>
					Form submission is mocked and will simply close this panel.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<EndpointForm onSubmit={onSubmit} />
			</CardContent>
			<CardActions className="border-t border-gray-100 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900/40">
				<Button
					className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
					type="button"
					onClick={onCancel}>
					Cancel
				</Button>
			</CardActions>
		</Card>
	);
};

export default EndpointListFormPanel;
