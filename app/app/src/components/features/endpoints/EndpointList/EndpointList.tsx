"use client";

import { EndpointDeleteModal } from "../EndpointDeleteModal";
import EndpointCollectionsSidebar from "./EndpointCollectionsSidebar";
import EndpointListFormPanel from "./EndpointListFormPanel";
import EndpointListHeader from "./EndpointListHeader";
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
		isFetchingExternalApi,
		externalApiResult,
		externalApiError,
		handleEdit,
		handleDelete,
		handleConfirmDelete,
		handleCancelDelete,
		handleFormSubmit,
		handleFormCancel,
		handleSelectEndpoint,
		handleSelectCollection,
		handleTestExternalApi,
	} = useEndpointList();

	return (
		<div className="flex h-full flex-col gap-6">
			<EndpointListHeader />
			<div className="grid h-full items-start justify-items-start gap-y-6 gap-x-10 overflow-hidden lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
				<EndpointCollectionsSidebar
					collections={collections}
					activeCollectionId={activeCollectionId}
					onSelectCollection={handleSelectCollection}
				/>
				<div className="flex h-full w-full flex-col gap-6 xl:flex-row xl:items-start xl:justify-start xl:gap-4">
					<EndpointListMainSection
						isLoading={isLoading}
						filteredEndpoints={filteredEndpoints}
						activeEndpointId={activeEndpointId}
						onSelectEndpoint={handleSelectEndpoint}
						onEditEndpoint={handleEdit}
						onDeleteEndpoint={handleDelete}
						onTestExternalApi={handleTestExternalApi}
						isTestingExternalApi={isFetchingExternalApi}
						externalApiError={externalApiError}
						hasExternalApiResponse={Boolean(externalApiResult)}
					/>
					<div className="hidden h-full w-full xl:flex xl:items-start">
						<EndpointPreviewSection
							activeEndpoint={activeEndpoint}
							externalApiResult={externalApiResult}
							externalApiError={externalApiError}
							isExternalApiLoading={isFetchingExternalApi}
						/>
					</div>
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
