import type { EndpointPreviewSectionProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointPreviewSection = ({
	activeEndpoint,
}: EndpointPreviewSectionProps) => {
	return (
		<section className="hidden h-full w-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 backdrop-blur-lg lg:w-[32rem] lg:max-w-[32rem] xl:flex">
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
			<div className="mt-5 flex-1 overflow-y-auto space-y-5">
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
									<dt className="text-xs uppercase tracking-[0.2em]">Delay</dt>
									<dd className="mt-1 font-semibold text-slate-100">
										{activeEndpoint.responseDelayMs}ms
									</dd>
								</div>
							)}
						</dl>
						<div className="space-y-2">
							<h4 className="text-xs uppercase tracking-[0.2em] text-slate-400">
								Mocked response
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
						<p className="text-sm">Select an endpoint to view details.</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default EndpointPreviewSection;
