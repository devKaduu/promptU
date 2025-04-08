import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrincipaisRecursos } from "@/components/bento-ui";
import { PromptOptimizer } from "@/components/prompt-optimizer";

export function HomeTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <PrincipaisRecursos />

        <section id="optimizer" className="pb-32 px-4 bg-black">
          <div className="container max-w-5xl mx-auto">
            <div className="flex justify-center items-center flex-col text-center gap-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Otimize seu prompt</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Melhore a clareza e a precisão dos seus comandos com sugestões inteligentes e ajustes automáticos.
              </p>
            </div>

            <PromptOptimizer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
