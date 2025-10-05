import { useEffect, useMemo, useState } from "react";
import { mockCollections } from "../../../../data/mock-collections.data";
import { mockEndpointList } from "../../../../data/mock-endpoints.data";
import type { EndpointListItem } from "../../../../types/features/endpoints/endpoint-list.types";
import type { EndpointListFormPanelProps } from "../../../../types/features/endpoints/endpoint-list-components.types";
import { ENDPOINT_LIST_LOAD_DELAY_MS } from "../EndpointList/endpoint-list.constants";

type UseEndpointListReturn = {
	collections: typeof mockCollections;
	filteredEndpoints: EndpointListItem[];
	activeCollectionId: string | null;
	activeEndpoint: EndpointListItem | null;
	activeEndpointId: string | null;
	isLoading: boolean;
	isFormVisible: boolean;
	selectedEndpoint: EndpointListItem | null;
	isDeleteModalOpen: boolean;
	isDeleting: boolean;
	handleEdit: (endpoint: EndpointListItem) => void;
	handleDelete: (endpoint: EndpointListItem) => void;
	handleConfirmDelete: () => void;
	handleCancelDelete: () => void;
	handleFormSubmit: EndpointListFormPanelProps["onSubmit"];
	handleFormCancel: EndpointListFormPanelProps["onCancel"];
	handleSelectEndpoint: (endpoint: EndpointListItem) => void;
	handleSelectCollection: (collectionId: string) => void;
};

export const useEndpointList = (): UseEndpointListReturn => {
	const collections = useMemo(() => mockCollections, []);
	const [endpoints, setEndpoints] = useState<EndpointListItem[]>([]);
	const [selectedEndpoint, setSelectedEndpoint] =
		useState<EndpointListItem | null>(null);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [activeEndpointId, setActiveEndpointId] = useState<string | null>(null);
	const [activeCollectionId, setActiveCollectionId] = useState<string | null>(
		collections[0]?.id ?? null
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			setEndpoints(mockEndpointList);
			setIsLoading(false);
		}, ENDPOINT_LIST_LOAD_DELAY_MS);

		return () => clearTimeout(timer);
	}, []);

	const filteredEndpoints = useMemo(() => {
		if (!activeCollectionId) {
			return endpoints;
		}

		return endpoints.filter(
			(endpoint) => endpoint.collectionId === activeCollectionId
		);
	}, [endpoints, activeCollectionId]);

	useEffect(() => {
		if (!filteredEndpoints.length) {
			setActiveEndpointId(null);
			return;
		}

		if (
			activeEndpointId &&
			filteredEndpoints.some((endpoint) => endpoint.id === activeEndpointId)
		) {
			return;
		}

		setActiveEndpointId(filteredEndpoints[0]?.id ?? null);
	}, [filteredEndpoints, activeEndpointId]);

	const handleEdit = (endpoint: EndpointListItem) => {
		setSelectedEndpoint(endpoint);
		setIsFormVisible(true);
	};

	const handleDelete = (endpoint: EndpointListItem) => {
		setSelectedEndpoint(endpoint);
		setIsDeleteModalOpen(true);
	};

	const handleConfirmDelete = () => {
		setIsDeleting(true);
		setTimeout(() => {
			setIsDeleting(false);
			setIsDeleteModalOpen(false);
			setSelectedEndpoint(null);
		}, 600);
	};

	const handleCancelDelete = () => {
		setIsDeleteModalOpen(false);
		setSelectedEndpoint(null);
	};

	const handleFormSubmit: EndpointListFormPanelProps["onSubmit"] = (event) => {
		event.preventDefault();
		setIsFormVisible(false);
		setSelectedEndpoint(null);
	};

	const handleFormCancel: EndpointListFormPanelProps["onCancel"] = () => {
		setIsFormVisible(false);
		setSelectedEndpoint(null);
	};

	const handleSelectEndpoint = (endpoint: EndpointListItem) => {
		setActiveEndpointId(endpoint.id);
	};

	const handleSelectCollection = (collectionId: string) => {
		setActiveCollectionId(collectionId);
		const firstEndpointInCollection = endpoints.find(
			(endpoint) => endpoint.collectionId === collectionId
		);
		setActiveEndpointId(firstEndpointInCollection?.id ?? null);
	};

	const activeEndpoint = useMemo(() => {
		if (!activeEndpointId) {
			return null;
		}

		return (
			endpoints.find((endpoint) => endpoint.id === activeEndpointId) ?? null
		);
	}, [endpoints, activeEndpointId]);

	return {
		collections,
		filteredEndpoints,
		activeCollectionId,
		activeEndpoint,
		activeEndpointId,
		isLoading,
		isFormVisible,
		selectedEndpoint,
		isDeleteModalOpen,
		isDeleting,
		handleEdit,
		handleDelete,
		handleConfirmDelete,
		handleCancelDelete,
		handleFormSubmit,
		handleFormCancel,
		handleSelectEndpoint,
		handleSelectCollection,
	};
};
