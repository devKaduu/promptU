import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromptOptimizer from "@/components/prompt-optimizer";
import { TextEffect } from "@/components/lib/text-effect";
import { AnimatedGroup } from "@/components/lib/animated-group";
import PrincipaisRecursos from "@/components/bento-ui";
import GridBackground from "@/assets/grid.png";
import Blur from "@/assets/blur.png";
import BlueBall from "@/assets/blue-ball.png";

export function HomeTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-10 right-0 left-0 z-30">
        <div className="container mx-auto flex items-center justify-center py-4">
          <TextEffect preset="slide" speedSegment={0.3} as="h1" className="text-3xl font-light ">
            promptU
          </TextEffect>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-4 text-center bg-gradient-to-b from-background to-muted h-[calc(100vh)] justify-center flex bg-[url('/background.png')] bg-cover bg-center relative">
          <div className="container max-w-4xl mx-auto mt-64">
            <Image src={GridBackground} alt="Grid" className="absolute bottom-0 -z-80 pointer-events-none left-1/2 transform -translate-x-1/2" />

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className=""
            >
              <Image src={Blur} alt="Blue Blur" className="absolute bottom-0 transform left-1/2 -translate-x-1/2 -z-90 pointer-events-none" />
            </AnimatedGroup>

            <Image src={BlueBall} alt="Blue Ball" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none" />

            <TextEffect preset="fade-in-blur" speedSegment={0.5} as="h1" className="text-4xl md:text-6xl font-bold mb-6 ">
              Criar prompts perfeitos para IA
            </TextEffect>

            <TextEffect preset="fade-in-blur" speedSegment={0.3} delay={0.2} as="p" per="line" className="text-xl mb-10 max-w-3xl mx-auto">
              Aprimore automaticamente seus prompts com técnicas avançadas de engenharia de prompts para obter melhores resultados das plataformas de IA.
            </TextEffect>

            <div className="flex justify-center">
              <Link href="#optimizer">
                <Button size="lg" className="gap-2">
                  Experimente agora <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

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

      <footer className="border-t py-8 bg-black">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 promptU. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
