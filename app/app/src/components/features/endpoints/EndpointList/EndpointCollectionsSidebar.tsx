import { Button } from "../../../shared/button";
import type { EndpointCollectionsSidebarProps } from "../../../../types/features/endpoints/endpoint-list-components.types";

const EndpointCollectionsSidebar = ({
	collections,
	activeCollectionId,
	onSelectCollection,
}: EndpointCollectionsSidebarProps) => {
	return (
		<aside className="hidden h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-white/5 text-slate-100 backdrop-blur-lg lg:flex">
			<div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
				<div className="space-y-1">
					<h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
						Collections
					</h2>
					<p className="text-xs text-slate-400">
						Organize and reuse your requests
					</p>
				</div>
				<Button className="me-0 mb-0 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
					New
				</Button>
			</div>

			<div className="border-b border-white/10 px-4 py-4">
				<label
					htmlFor="collections-search"
					className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">
					Search
				</label>
				<div className="relative">
					<input
						type="search"
						id="collections-search"
						placeholder="Filter requests"
						className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
					/>
				</div>
			</div>

			<nav className="flex-1 overflow-y-auto px-4 py-4">
				<ul className="space-y-4">
					{collections.map((collection) => {
						const isActiveCollection = collection.id === activeCollectionId;

						return (
							<li key={collection.id}>
								<button
									type="button"
									onClick={() => onSelectCollection(collection.id)}
									className={`group flex w-full flex-col gap-3 rounded-xl border border-transparent px-3 py-3 text-left transition-colors ${
										isActiveCollection
											? "border-cyan-400/80 bg-slate-950/50"
											: "hover:border-cyan-400/50 hover:bg-slate-950/40"
									}`}>
									<div className="flex items-center justify-between">
										<span className="text-sm font-semibold text-slate-100">
											{collection.name}
										</span>
										{collection.updatedAtIso && (
											<span className="text-xs text-slate-500">
												Updated{" "}
												{new Date(collection.updatedAtIso).toLocaleDateString()}
											</span>
										)}
									</div>
									<ul className="space-y-2">
										{collection.items.map((item) => (
											<li
												key={item.id}
												className="flex flex-col rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2 text-xs text-slate-300">
												<span className="flex items-center justify-between">
													<span className="inline-flex items-center gap-2">
														<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/60 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-200">
															{item.httpMethod}
														</span>
														<span className="font-medium text-slate-100">
															{item.name}
														</span>
													</span>
													<span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
														{item.path}
													</span>
												</span>
												{item.description && (
													<span className="mt-1 text-[0.7rem] text-slate-400">
														{item.description}
													</span>
												)}
											</li>
										))}
									</ul>
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
};

export default EndpointCollectionsSidebar;
