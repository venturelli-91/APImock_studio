import { Button } from "../../../shared/button";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from "../../../shared/modal";
import { EndpointForm } from "../EndpointForm";
import type { EndpointListFormPanelProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointListFormPanel = ({
	isVisible,
	selectedEndpoint,
	onSubmit,
	onCancel,
}: EndpointListFormPanelProps) => {
	const formId = selectedEndpoint
		? `endpoint-form-${selectedEndpoint.id}`
		: "endpoint-form-new";

	return (
		<Modal
			isOpen={isVisible}
			onClose={onCancel}
			aria-labelledby="endpoint-form-title"
			aria-describedby="endpoint-form-description"
			containerClassName="max-w-4xl"
			className="w-full max-h-[90vh] overflow-hidden">
			<ModalHeader className="items-start">
				<ModalTitle
					id="endpoint-form-title"
					className="text-xl">
					{selectedEndpoint ? "Edit endpoint" : "Create endpoint"}
				</ModalTitle>
				<ModalCloseButton
					onClick={onCancel}
					aria-label="Close endpoint form"
				/>
			</ModalHeader>
			<ModalBody className="space-y-6 overflow-y-auto">
				<ModalDescription
					id="endpoint-form-description"
					className="text-sm text-gray-500 dark:text-gray-400">
					Form submission is mocked and will simply close this modal.
				</ModalDescription>
				<EndpointForm
					onSubmit={onSubmit}
					id={formId}
				/>
			</ModalBody>
			<ModalFooter>
				<Button
					className="w-full sm:w-auto"
					type="submit"
					form={formId}>
					Save endpoint
				</Button>
				<Button
					className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
					type="button"
					onClick={onCancel}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default EndpointListFormPanel;
