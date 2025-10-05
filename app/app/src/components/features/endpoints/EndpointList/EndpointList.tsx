"use client";

import { useEffect, useMemo, useState } from "react";
import { mockCollections } from "../../../../data/mock-collections.data";
import { mockEndpointList } from "../../../../data/mock-endpoints.data";
import type { EndpointListItem } from "../../../../types/features/endpoints/endpoint-list.types";
import type { EndpointListFormPanelProps } from "../../../../types/features/endpoints/endpoint-list-components.types";
import { EndpointDeleteModal } from "../EndpointDeleteModal";
import EndpointCollectionsSidebar from "./EndpointCollectionsSidebar";
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
	const [activeEndpointId, setActiveEndpointId] = useState<string | null>(null);
	const [activeCollectionId, setActiveCollectionId] = useState<string | null>(
		mockCollections[0]?.id ?? null
	);

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

	const activeEndpoint = endpoints.find(
		(endpoint) => endpoint.id === activeEndpointId
	);

	return (
		<div className="grid h-full gap-6 overflow-hidden lg:grid-cols-[minmax(0,250px)_minmax(0,360px)_1fr]">
			<EndpointCollectionsSidebar
				collections={mockCollections}
				activeCollectionId={activeCollectionId}
				onSelectCollection={handleSelectCollection}
			/>
			<section className="flex h-full flex-col">
				<EndpointListHeader />
				<div
					className="relative mt-6 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
					aria-busy={isLoading}>
					<div
						className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-cyan-400/50 to-transparent opacity-0"
						aria-hidden
					/>
					<div className="flex h-full flex-col overflow-hidden">
						<div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">
							<span>Endpoints</span>
							<span>
								{isLoading ? "Loading" : `${filteredEndpoints.length} itens`}
							</span>
						</div>
						<div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 pr-6">
							{isLoading ? (
								<EndpointListSkeleton count={ENDPOINT_LIST_SKELETON_COUNT} />
							) : filteredEndpoints.length ? (
								filteredEndpoints.map((endpoint) => (
									<EndpointListCard
										key={endpoint.id}
										endpoint={endpoint}
										onEdit={handleEdit}
										onDelete={handleDelete}
										onSelect={handleSelectEndpoint}
										isActive={activeEndpointId === endpoint.id}
									/>
								))
							) : (
								<p className="text-center text-sm text-slate-300">
									Nenhum endpoint nesta coleção ainda.
								</p>
							)}
						</div>
					</div>
				</div>
			</section>
			<section className="hidden h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-lg lg:flex">
				<div className="flex items-center justify-between border-b border-white/10 pb-4">
					<h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-300">
						Preview
					</h2>
					{activeEndpoint && (
						<span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
							{activeEndpoint.httpMethod}
						</span>
					)}
				</div>
				<div className="mt-6 flex-1 overflow-y-auto space-y-6">
					{activeEndpoint ? (
						<>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">{activeEndpoint.name}</h3>
								<p className="text-sm text-slate-300">
									{activeEndpoint.description}
								</p>
							</div>
							<dl className="space-y-3 text-sm text-slate-300">
								<div className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3">
									<dt className="text-xs uppercase tracking-[0.2em]">Status</dt>
									<dd className="mt-1 font-semibold text-slate-100">
										{activeEndpoint.statusCode}
									</dd>
								</div>
								<div className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3">
									<dt className="text-xs uppercase tracking-[0.2em]">Path</dt>
									<dd className="mt-1 font-mono text-sm text-slate-100">
										{activeEndpoint.path}
									</dd>
								</div>
								{typeof activeEndpoint.responseDelayMs === "number" && (
									<div className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3">
										<dt className="text-xs uppercase tracking-[0.2em]">
											Delay
										</dt>
										<dd className="mt-1 font-semibold text-slate-100">
											{activeEndpoint.responseDelayMs}ms
										</dd>
									</div>
								)}
							</dl>
							<div className="space-y-2">
								<h4 className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Resposta simulada
								</h4>
								<pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
									{JSON.stringify(
										{
											message: `${activeEndpoint.httpMethod} ${activeEndpoint.path} mocked response`,
											status: activeEndpoint.statusCode,
										},
										null,
										2
									)}
								</pre>
							</div>
						</>
					) : (
						<div className="flex h-full flex-col items-center justify-center space-y-3 text-center text-slate-400">
							<p className="text-sm uppercase tracking-[0.3em]">Preview</p>
							<p className="text-sm">
								Selecione um endpoint para visualizar detalhes.
							</p>
						</div>
					)}
				</div>
			</section>

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
