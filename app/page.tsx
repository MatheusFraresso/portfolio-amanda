import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full px-10 pt-5 ">
      <div className="space-y-10 ">
        <div className="flex items-center space-x-5" id="home">
          <Image
            alt="perfil"
            src={"/images/pic.webp"}
            width={200}
            height={200}
            className="rounded-full shadow-2xl"
          />
          <div className="space-y-5" id="skills">
            <h1 className="text-4xl font-medium">Amanda Bonato</h1>
            <h3 className="text-lg font-semibold">
              Designer Gráfico Pleno | Criação de Identidade Visual · Embalagem
              · Mídias sociais · Animação | Adobe Photoshop · Illustrator ·
              Premiere · After Effects
            </h3>
          </div>
        </div>

        <div id="sobre" className="space-y-4 w-[50vw] pl-5 text-lg">
          <p>
            O design sempre foi uma presença constante em minha vida. Desde
            muito jovem, sempre fui naturalmente visual, interpretando o mundo
            ao meu redor de maneira imagética. Aprender e explicar para os
            outros se tornava muito mais fácil quando eu desenhava. Foi assim
            que, sem perceber, acabei sendo uma designer muito antes de
            descobrir que queria me tornar uma profissional dessa área.
          </p>
          <p>
            Desde cedo, me encantava com propagandas, logotipos de empresas,
            folders e artes aleatórias que eu criava no Canva, apenas por
            diversão. Foi assim que encontrei meu caminho e comecei a construir
            minha trajetória profissional, investindo em cursos e projetos.
          </p>
          <p>
            Hoje, entrego projetos de qualidade com soluções criativas,
            explorando cada briefing em profundidade. Combinando conhecimento
            técnico e um toque pessoal, desenvolvo projetos únicos que atendem
            às necessidades do cliente de forma eficaz.
          </p>
        </div>

        <div id="linkedin">
          <iframe
            src="https://www.linkedin.com/in/amanda-bonato/"
            width={800}
            height={400}
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
}
