import EndpointListCard from "./EndpointListCard";
import EndpointListHeader from "./EndpointListHeader";
import EndpointListSkeleton from "./EndpointListSkeleton";
import { ENDPOINT_LIST_SKELETON_COUNT } from "./endpoint-list.constants";
import type { EndpointListMainSectionProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointListMainSection = ({
	isLoading,
	filteredEndpoints,
	activeEndpointId,
	onSelectEndpoint,
	onEditEndpoint,
	onDeleteEndpoint,
}: EndpointListMainSectionProps) => {
	return (
		<section className="flex h-full flex-col">
			<EndpointListHeader />
			<div
				className="relative mt-6 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg lg:w-[32rem] lg:max-w-[32rem]"
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
					<div className="flex-1 overflow-y-auto px-4 py-4">
						<div className="flex flex-col space-y-4">
							{isLoading ? (
								<EndpointListSkeleton count={ENDPOINT_LIST_SKELETON_COUNT} />
							) : filteredEndpoints.length ? (
								filteredEndpoints.map((endpoint) => (
									<EndpointListCard
										key={endpoint.id}
										endpoint={endpoint}
										onEdit={onEditEndpoint}
										onDelete={onDeleteEndpoint}
										onSelect={onSelectEndpoint}
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
			</div>
		</section>
	);
};

export default EndpointListMainSection;
