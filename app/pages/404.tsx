import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/src/components/shared/button";

const Custom404 = () => {
	return (
		<>
			<Head>
				<title>404 • Page not found</title>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-center text-slate-100">
				<p className="text-sm uppercase tracking-[0.3em] text-slate-400">
					Error 404
				</p>
				<h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
					Oops! We can’t find that page.
				</h1>
				<p className="mt-6 max-w-xl text-base text-slate-300">
					The resource you’re looking for might have been removed, renamed, or
					is momentarily unavailable. Double-check the URL or head back to your
					dashboard to keep exploring your API mocks.
				</p>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<Link href="/">
						<Button className="bg-sky-500 hover:bg-sky-600 focus:ring-sky-500/50">
							Back to dashboard
						</Button>
					</Link>
					<Link
						href="mailto:support@mockstudio.dev"
						className="text-sm font-medium text-slate-300 transition hover:text-slate-100">
						Need a hand?
					</Link>
				</div>
			</main>
		</>
	);
};

export default Custom404;
