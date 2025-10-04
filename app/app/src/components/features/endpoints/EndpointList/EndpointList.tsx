"use client";

import { useState } from "react";
import { mockEndpointList } from "../../../../data/mock-endpoints.data";
import type { EndpointListItem } from "../../../../types/features/endpoints/endpoint-list.types";
import type { EndpointListFormPanelProps } from "../../../../types/features/endpoints/endpoint-list-components.types";
import { EndpointDeleteModal } from "../EndpointDeleteModal";
import EndpointListCard from "./EndpointListCard";
import EndpointListFormPanel from "./EndpointListFormPanel";
import EndpointListHeader from "./EndpointListHeader";

const EndpointList = () => {
	const [endpoints] = useState<EndpointListItem[]>(mockEndpointList);
	const [selectedEndpoint, setSelectedEndpoint] =
		useState<EndpointListItem | null>(null);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

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
		<div className="space-y-10">
			<div className="space-y-4">
				<EndpointListHeader />
				<div className="grid gap-4 md:grid-cols-2">
					{endpoints.map((endpoint) => (
						<EndpointListCard
							key={endpoint.id}
							endpoint={endpoint}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					))}
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
