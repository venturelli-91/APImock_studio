import type { EndpointPreviewSectionProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointPreviewSection = ({
	activeEndpoint,
	externalApiResult,
	externalApiError,
	isExternalApiLoading,
}: EndpointPreviewSectionProps) => {
	const renderExternalPayload = () => {
		if (!externalApiResult) {
			return null;
		}

		const { payload } = externalApiResult;

		if (typeof payload === "string") {
			return payload;
		}

		try {
			return JSON.stringify(payload, null, 2);
		} catch (error) {
			console.error("Falha ao serializar a resposta externa", error);
			return "Não foi possível exibir o conteúdo da resposta.";
		}
	};

	return (
		<section className="flex w-full max-w-md flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 backdrop-blur-lg sm:p-5 min-h-[18rem]">
			<div className="flex items-center justify-between border-b border-white/10 pb-3">
				<h2 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-300">
					Preview
				</h2>
				{activeEndpoint && (
					<span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
						{activeEndpoint.httpMethod}
					</span>
				)}
			</div>
			<div className="mt-4 flex flex-1 flex-col gap-4 overflow-hidden">
				{activeEndpoint ? (
					<>
						<div className="space-y-2">
							<h3 className="text-lg font-semibold">{activeEndpoint.name}</h3>
							<p className="text-xs text-slate-300 sm:text-sm">
								{activeEndpoint.description}
							</p>
						</div>
						<dl className="space-y-2 text-xs text-slate-300 sm:text-sm">
							<div className="rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2 sm:px-4 sm:py-3">
								<dt className="text-[0.65rem] uppercase tracking-[0.2em] sm:text-xs">
									Status
								</dt>
								<dd className="mt-1 font-semibold text-slate-100">
									{externalApiResult
										? `${externalApiResult.status} ${externalApiResult.statusText}`.trim()
										: activeEndpoint.statusCode}
								</dd>
							</div>
							<div className="rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2 sm:px-4 sm:py-3">
								<dt className="text-[0.65rem] uppercase tracking-[0.2em] sm:text-xs">
									Path
								</dt>
								<dd className="mt-1 font-mono text-xs text-slate-100 sm:text-sm">
									{activeEndpoint.path}
								</dd>
							</div>
							{typeof activeEndpoint.responseDelayMs === "number" && (
								<div className="rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2 sm:px-4 sm:py-3">
									<dt className="text-[0.65rem] uppercase tracking-[0.2em] sm:text-xs">
										Delay
									</dt>
									<dd className="mt-1 font-semibold text-slate-100">
										{activeEndpoint.responseDelayMs}ms
									</dd>
								</div>
							)}
						</dl>
						<div className="space-y-2">
							<h4 className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
								Mocked response
							</h4>
							{isExternalApiLoading ? (
								<p className="text-xs text-slate-300 sm:text-sm">
									Carregando resposta da API externa...
								</p>
							) : externalApiError ? (
								<p className="text-xs text-rose-400 sm:text-sm">
									{externalApiError}
								</p>
							) : externalApiResult ? (
								<div className="space-y-2">
									<p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
										Fonte externa
									</p>
									<div className="rounded-xl border border-white/10 bg-slate-950/60 p-3 sm:p-4">
										<div className="flex flex-col gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
											<span>Status: {externalApiResult.status}</span>
											<span className="break-all">
												URL: {externalApiResult.url}
											</span>
										</div>
										<pre className="mt-3 max-h-56 overflow-auto rounded-lg border border-white/10 bg-slate-950/80 p-3 text-xs text-slate-200 sm:p-4 sm:text-sm">
											{renderExternalPayload()}
										</pre>
									</div>
								</div>
							) : (
								<pre className="max-h-48 overflow-auto rounded-xl border border-white/10 bg-slate-950/60 p-3 text-xs text-slate-200 sm:p-4 sm:text-sm">
									{JSON.stringify(
										{
											message: `${activeEndpoint.httpMethod} ${activeEndpoint.path} mocked response`,
											status: activeEndpoint.statusCode,
										},
										null,
										2
									)}
								</pre>
							)}
						</div>
					</>
				) : (
					<div className="flex flex-1 flex-col items-center justify-center space-y-3 text-center text-slate-400">
						<p className="text-xs uppercase tracking-[0.3em] sm:text-sm">
							Preview
						</p>
						<p className="text-xs sm:text-sm">
							Select an endpoint to view details.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default EndpointPreviewSection;
