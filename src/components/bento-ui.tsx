import { Zap, BarChart3, Smartphone, Users, BadgeDollarSign } from "lucide-react";

export function PrincipaisRecursos() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Principais Recursos</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">Conheça as funcionalidades que tornam nossa plataforma única e poderosa.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-[1200px] mx-auto h-auto">
          {/* Card principal - ocupa 2 colunas e 2 linhas */}
          <div className="md:col-span-2 md:row-span-2 bg-transparent rounded-xl p-6 border relative overflow-hidden">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-700">Desempenho Otimizado</h3>
              <p className="text-gray-500 group-hover:text-blue-600 text-md">
                Nossa plataforma foi projetada para oferecer velocidade excepcional e eficiência em todas as operações. Utilizamos tecnologias de ponta para
                garantir que seus processos sejam executados com o máximo de desempenho, mesmo com grandes volumes de dados.
              </p>

              <p className="text-white text-[11rem] text-right absolute left-10 bottom-0 font-light pointer-events-none whitespace-nowrap">IA promptU</p>
            </div>
          </div>

          {/* Card médio */}
          <div className="bg-transparent rounded-xl p-6 border">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-green-600">
                <BadgeDollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-green-700">Totalmente Gratuito</h3>
              <p className="text-gray-500 group-hover:text-green-600 text-md">
                Aproveite todos os recursos sem pagar nada. Sem taxas escondidas, sem pegadinhas — é realmente grátis.
              </p>
            </div>
          </div>

          {/* Card médio */}
          <div className="bg-transparent rounded-xl p-6 border relative overflow-hidden z-40">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-purple-600 ">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-purple-700">Análises Detalhadas</h3>
              <p className="text-gray-500 group-hover:text-purple-600 text-md">
                Explore diferentes estilos de geração: criativo, preciso, técnico ou aleatório — adaptados ao seu objetivo. E isso é só o começo: novas opções
                estão chegando para turbinar ainda mais suas análises.
              </p>
            </div>
          </div>

          {/* Card médio */}
          <div className="bg-transparent rounded-xl p-6 border">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-orange-600">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-orange-700">Totalmente Responsivo</h3>
              <p className="text-gray-500 group-hover:text-orange-600 text-md">
                Acesse de qualquer dispositivo com uma experiência otimizada para desktop, tablet e smartphones.
              </p>
            </div>
          </div>

          {/* Card largo - ocupa 2 colunas */}
          <div className="md:col-span-2 bg-transparent rounded-xl p-6 border">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-yellow-600 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-red-700 mb-2">Colaboração em Tempo Real</h3>
                <p className="text-gray-500 group-hover:text-red-600 text-md">
                  Receba feedback instantâneo sobre seus prompts em colaboração com sua equipe. Veja o que funcionou, onde errou e aprenda em tempo real para
                  criar instruções mais precisas nas próximas interações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
