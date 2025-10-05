import { useState } from "react";
import EndpointListCard from "./EndpointListCard";
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
	const [externalApiUrl, setExternalApiUrl] = useState("");

	const handleTestExternalApi = () => {
		const trimmedUrl = externalApiUrl.trim();
		if (!trimmedUrl) {
			return;
		}

		const targetUrl = trimmedUrl.startsWith("http")
			? trimmedUrl
			: `https://${trimmedUrl}`;

		window.open(targetUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<section className="flex h-full flex-col">
			<div
				className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg lg:w-[28rem] lg:max-w-[28rem]"
				aria-busy={isLoading}>
				<div
					className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-cyan-400/50 to-transparent opacity-0"
					aria-hidden
				/>
				<div className="flex h-full flex-col overflow-hidden">
					<div className="space-y-4 border-b border-white/10 px-4 py-4">
						<div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
							<span>Endpoints</span>
							<span>
								{isLoading ? "Loading" : `${filteredEndpoints.length} itens`}
							</span>
						</div>
						<div className="space-y-3">
							<label
								htmlFor="external-api-url"
								className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
								<span>External API URL</span>
								<input
									type="url"
									id="external-api-url"
									value={externalApiUrl}
									onChange={(event) => setExternalApiUrl(event.target.value)}
									placeholder="https://api.example.com/resource"
									className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
								/>
							</label>
							<div className="flex flex-wrap items-center gap-3">
								<button
									type="button"
									onClick={handleTestExternalApi}
									className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-400"
									disabled={!externalApiUrl.trim()}>
									Test API
								</button>
								<p className="text-xs text-slate-400">
									We&apos;ll open the endpoint response in a new tab.
								</p>
							</div>
						</div>
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
