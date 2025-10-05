import type { FormEventHandler } from "react";
import type { EndpointCollection } from "../collection/endpoint-collection.types";
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

export interface EndpointCollectionsSidebarProps {
	collections: EndpointCollection[];
	activeCollectionId: string | null;
	onSelectCollection: (collectionId: string) => void;
}

export interface EndpointListMainSectionProps {
	isLoading: boolean;
	filteredEndpoints: EndpointListItem[];
	activeEndpointId: string | null;
	onSelectEndpoint: (endpoint: EndpointListItem) => void;
	onEditEndpoint: (endpoint: EndpointListItem) => void;
	onDeleteEndpoint: (endpoint: EndpointListItem) => void;
}

export interface EndpointPreviewSectionProps {
	activeEndpoint: EndpointListItem | null;
}
