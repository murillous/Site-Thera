import Image from "next/image";
import CS from "../../assets/Desenvolvimento.png";
import DivCards from "../BusinessCard/DivCards";

export default function AboutSection() {
  return (
    <>
      {/* Background com gradient */}
      <div className="h-full justify-center items-center bg-gradient-to-t from-slate-50 to-zinc-100 md:p-40">

        <div className="flex flex-col justify-center items-center p-4">
          <span className="text-2xl font-semibold sm:text-xl">
            Quem nós somos
          </span>
          <p className="text-sm font-extralight text-gray-700">
            Entenda sobre alguns detalhes
          </p>
        </div>

        {/* Responsividade para versão de desktop */}
        <div className="2xl:flex 2xl:flex-row xl:justify-center xl:items-center xl:pt-10">
          <div className="flex justify-center items-center">
            <Image
              className="mx-3 w-screen sm:max-w-96 2xl:max-w-[450px]"
              src={CS}
              alt="Computer Science"
            />
          </div>
          <DivCards />
        </div>
      </div>
    </>
  );
}
