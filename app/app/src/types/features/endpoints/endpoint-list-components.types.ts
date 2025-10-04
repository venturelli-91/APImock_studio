import type { FormEventHandler } from "react";
import type { EndpointListItem } from "./endpoint-list.types";

export interface EndpointListCardProps {
	endpoint: EndpointListItem;
	onEdit: (endpoint: EndpointListItem) => void;
	onDelete: (endpoint: EndpointListItem) => void;
	onSelect?: (endpoint: EndpointListItem) => void;
	isActive?: boolean;
}

export interface EndpointListFormPanelProps {
	isVisible: boolean;
	selectedEndpoint: EndpointListItem | null;
	onSubmit: FormEventHandler<HTMLFormElement>;
	onCancel: () => void;
}

export interface EndpointListSkeletonProps {
	count?: number;
}
