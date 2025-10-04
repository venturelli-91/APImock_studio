import {
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalDescription,
	ModalCloseButton,
} from "../../../shared/modal";
import { Button } from "../../../shared/button";
import { EndpointDeleteModalProps } from "../../../../types/features/endpoints/endpoint-delete-modal.types";

const EndpointDeleteModal = ({
	isOpen,
	endpointName,
	onConfirm,
	onCancel,
	isLoading = false,
}: EndpointDeleteModalProps) => (
	<Modal
		isOpen={isOpen}
		onClose={onCancel}
		aria-labelledby="endpoint-delete-title"
		aria-describedby="endpoint-delete-description">
		<ModalHeader className="items-start">
			<ModalTitle id="endpoint-delete-title">Delete endpoint</ModalTitle>
			<ModalCloseButton
				onClick={onCancel}
				aria-label="Close delete endpoint modal"
			/>
		</ModalHeader>
		<ModalBody className="space-y-2">
			<ModalDescription id="endpoint-delete-description">
				You&apos;re about to permanently remove{" "}
				{endpointName ? (
					<span className="font-semibold text-gray-900 dark:text-white">
						{endpointName}
					</span>
				) : (
					"this mocked endpoint"
				)}
				. This action cannot be undone.
			</ModalDescription>
		</ModalBody>
		<ModalFooter>
			<Button
				type="button"
				onClick={onCancel}
				className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
				disabled={isLoading}>
				Cancel
			</Button>
			<Button
				type="button"
				onClick={onConfirm}
				className="w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-red-600"
				disabled={isLoading}>
				{isLoading ? "Deleting..." : "Delete"}
			</Button>
		</ModalFooter>
	</Modal>
);

export default EndpointDeleteModal;
