import Link from "next/link";
import Image from "next/image";
import { ArrowBigDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "./lib/text-effect";
import { Blur, BlueBall, GridBackground } from "@/assets";

export function Hero() {
  return (
    <section className="px-4 text-center h-[calc(100vh)] justify-center flex relative">
      <div className="container max-w-4xl mx-auto mt-64 md:mt-48">
        <Image src={GridBackground} alt="Grid" className="absolute bottom-0 -z-80 pointer-events-none left-1/2 transform -translate-x-1/2" />

        <Image src={Blur} alt="Blue Blur" className="absolute bottom-0 transform left-1/2 -translate-x-1/2 -z-90 pointer-events-none" />

        <Image src={BlueBall} alt="Blue Ball" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none" />

        <TextEffect preset="fade-in-blur" speedSegment={0.5} as="h1" className="text-4xl md:text-6xl font-bold mb-6 ">
          Crie prompts perfeitos para IA
        </TextEffect>

        <TextEffect preset="fade-in-blur" speedSegment={0.3} delay={0.2} as="p" per="line" className="text-xl mb-10 max-w-3xl mx-auto">
          Aprimore automaticamente seus prompts com técnicas avançadas de engenharia de prompts para obter melhores resultados das plataformas de IA.
        </TextEffect>

        <div className="flex justify-center">
          <Link href="#optimizer">
            <Button size="lg" className="gap-2">
              Experimente agora <ArrowBigDownIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
