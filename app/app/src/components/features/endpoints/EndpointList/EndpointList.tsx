"use client";

import { EndpointDeleteModal } from "../EndpointDeleteModal";
import EndpointCollectionsSidebar from "./EndpointCollectionsSidebar";
import EndpointListFormPanel from "./EndpointListFormPanel";
import EndpointListMainSection from "./EndpointListMainSection";
import EndpointPreviewSection from "./EndpointPreviewSection";
import { useEndpointList } from "../../../../hooks/useEndpointList";

const EndpointList = () => {
	const {
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
	} = useEndpointList();

	return (
		<div className="grid h-full items-start justify-items-start gap-y-6 gap-x-[4px] overflow-hidden lg:grid-cols-[minmax(0,260px)_auto] xl:grid-cols-[minmax(0,260px)_auto_auto]">
			<EndpointCollectionsSidebar
				collections={collections}
				activeCollectionId={activeCollectionId}
				onSelectCollection={handleSelectCollection}
			/>
			<EndpointListMainSection
				isLoading={isLoading}
				filteredEndpoints={filteredEndpoints}
				activeEndpointId={activeEndpointId}
				onSelectEndpoint={handleSelectEndpoint}
				onEditEndpoint={handleEdit}
				onDeleteEndpoint={handleDelete}
			/>
			<EndpointPreviewSection activeEndpoint={activeEndpoint} />

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
