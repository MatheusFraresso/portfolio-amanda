import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row space-x-10 w-full min-h-fit  lg:justify-start">
      <div className=" w-full lg:w-fit ">
        <div className=" min-w-[200px] min-h-[300] lg:min-w-[400px]  lg:min-h-[620] relative">
          <Image
            fill
            className="object-contain lg:object-left-top  "
            src={"/images/landing-page/1.png"}
            alt="Foto Amanda Bonato - Bonart"
            quality={100}
          />
        </div>
      </div>
      <div className="py-6 space-y-12">
        <h3 className="text-5xl">
          Olá, sou a <span className="text-tertiary-main">Amanda</span>
        </h3>
        <div className="text-xl font-light text-text space-y-6">
          <p>
            Designer apaixonada por transformar ideias em soluções visuais que
            realmente fazem a diferença.
          </p>
          <p>
            Meu diferencial é captar ideias, mesmo as mais abstratas, e
            traduzi-las em projetos visuais que se destacam e impactam o público
            certo.
          </p>
          <p>
            Desde cedo, o design faz parte da minha vida, e com cursos e
            experiência, hoje entrego soluções estratégicas que refletem os
            objetivos de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
