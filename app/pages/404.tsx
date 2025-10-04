import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/src/components/shared/button";

const Custom404 = () => {
	return (
		<>
			<Head>
				<title>404 • Página não encontrada</title>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-center text-slate-100">
				<p className="text-sm uppercase tracking-[0.3em] text-slate-400">
					Erro 404
				</p>
				<h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
					Oops! Página não encontrada.
				</h1>
				<p className="mt-6 max-w-xl text-base text-slate-300">
					O recurso que você tentou acessar não existe mais ou foi movido.
					Confira o endereço digitado ou volte para o painel principal para
					continuar explorando os seus mocks de API.
				</p>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<Link href="/">
						<Button className="bg-sky-500 hover:bg-sky-600 focus:ring-sky-500/50">
							Voltar ao dashboard
						</Button>
					</Link>
					<Link
						href="mailto:support@mockstudio.dev"
						className="text-sm font-medium text-slate-300 transition hover:text-slate-100">
						Precisa de suporte?
					</Link>
				</div>
			</main>
		</>
	);
};

export default Custom404;
