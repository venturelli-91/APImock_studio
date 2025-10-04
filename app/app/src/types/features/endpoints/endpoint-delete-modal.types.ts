export interface EndpointDeleteModalProps {
	isOpen: boolean;
	endpointName?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
	isLoading?: boolean;
}
