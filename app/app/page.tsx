import { EndpointList } from "./src/components/features/endpoints";

export default function Home() {
	return (
		<main className="min-h-dvh bg-slate-950 px-6 py-12 text-slate-100">
			<section className="flex w-full max-w-5xl flex-col gap-10">
				<header className="space-y-6 text-left">
					<div className="space-y-3">
						<p className="text-sm uppercase tracking-[0.3em] text-slate-400">
							Mock Studio
						</p>
						<h1 className="text-4xl font-semibold sm:text-5xl">
							Streamline your API prototyping
						</h1>
						<p className="text-base text-slate-300">
							Design, test, and iterate on mocked endpoints without waiting on
							backend dependencies. Start from reusable templates, tweak
							responses, and share live previews with your teammates.
						</p>
					</div>
					<p className="text-sm text-slate-400">
						All interactions in this preview are mocked so you can explore the
						experience end-to-end without wiring a backend.
					</p>
				</header>
			</section>
			<section className="mt-10 w-full">
				<div className="mx-auto w-full max-w-5xl">
					<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
						<EndpointList />
					</div>
				</div>
			</section>
		</main>
	);
}
