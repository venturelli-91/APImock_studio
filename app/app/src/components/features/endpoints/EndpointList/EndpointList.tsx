"use client";

import { useEffect, useState } from "react";
import { mockEndpointList } from "../../../../data/mock-endpoints.data";
import type { EndpointListItem } from "../../../../types/features/endpoints/endpoint-list.types";
import type { EndpointListFormPanelProps } from "../../../../types/features/endpoints/endpoint-list-components.types";
import { EndpointDeleteModal } from "../EndpointDeleteModal";
import EndpointListCard from "./EndpointListCard";
import EndpointListFormPanel from "./EndpointListFormPanel";
import EndpointListHeader from "./EndpointListHeader";
import EndpointListSkeleton from "./EndpointListSkeleton";
import {
	ENDPOINT_LIST_LOAD_DELAY_MS,
	ENDPOINT_LIST_SKELETON_COUNT,
} from "./endpoint-list.constants";

const EndpointList = () => {
	const [endpoints, setEndpoints] = useState<EndpointListItem[]>([]);
	const [selectedEndpoint, setSelectedEndpoint] =
		useState<EndpointListItem | null>(null);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setEndpoints(mockEndpointList);
			setIsLoading(false);
		}, ENDPOINT_LIST_LOAD_DELAY_MS);

		return () => clearTimeout(timer);
	}, []);

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

	return (
		<div className="flex h-full flex-col space-y-10 overflow-y-auto pr-2">
			<div className="space-y-4">
				<EndpointListHeader />
				<div
					className="grid gap-4 md:grid-cols-2"
					aria-busy={isLoading}>
					{isLoading ? (
						<EndpointListSkeleton count={ENDPOINT_LIST_SKELETON_COUNT} />
					) : (
						endpoints.map((endpoint) => (
							<EndpointListCard
								key={endpoint.id}
								endpoint={endpoint}
								onEdit={handleEdit}
								onDelete={handleDelete}
							/>
						))
					)}
				</div>
			</div>

			<EndpointListFormPanel
				isVisible={isFormVisible}
				selectedEndpoint={selectedEndpoint}
				onSubmit={handleFormSubmit}
				onCancel={handleFormCancel}
			/>

			<EndpointDeleteModal
				isOpen={isDeleteModalOpen}
				onCancel={handleCancelDelete}
				onConfirm={handleConfirmDelete}
				isLoading={isDeleting}
				endpointName={selectedEndpoint?.name}
			/>
		</div>
	);
};

export default EndpointList;
