import { useState, useEffect } from "react";
import Image from "next/image";

const Advantages = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`${isMobile ? "h-[1100px]" : "h-[840px]"} 3xl:translate-x-[-6rem] lg:h-[1100px] bg-white w-[100%]`}>
      <div className="bg-gradient-to-b from-[#F3F4F6] to-[#FFFFFF] w-full h-10"></div>
      <div className="max-w-7xl mx-auto text-center bg-white">
        <div className="text-center mt-16">
          <div className="relative flex justify-center mb-4">
            <Image
              src="/Assets/022.webp"
              alt="Segunda imagen de Hero Banner"
              width={0}
              height={0}
              priority
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw"
              style={{
                objectFit: "cover",
                width: isMobile ? '10vw' : '3vw',
                height: "auto",
              }}
              className="w-auto h-auto"
            />
          </div>
          <h2
            className="font-bold text-black text-4xl mb-4 text-center"
            style={{
              width: isMobile ? '80vw' : '60vw',
              margin: '0 auto',
            }}
          >
            VENTAJAS CONECTARSE A INTERLAN
          </h2>
          <p
            className="font-semibold text-xs text-gray-600 mb-8 pb-10 pt-4 text-center"
            style={{
              width: isMobile ? '80vw' : '30vw',
              margin: '0 auto',
            }}
          >
            Primeros con fibra óptica a las casas y negocios de familias peruanas
          </p>
          {!isMobile ? (
            <div className="justify-items-center pb-4">
              <div className="relative flex justify-center translate-x-6">
                <Image
                  src="/Assets/021.webp"
                  alt="Segunda imagen de Hero Banner"
                  width={0}
                  height={0}
                  priority
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 60vw, 60vw"
                  style={{
                    objectFit: "cover",
                    width: "60vw",
                    height: "auto",
                  }}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-screen scale-[0.70] translate-y-[-100px]">
              <div className="grid grid-rows-6 gap-4 md:hidden">
                <div className="flex items-center justify-start p-4 w-[480px] h-[100px] rounded-lg bg-gray-200">
                  <span className="text-2xl text-blue-800 font-extrabold w-[100px]">01 /</span>
                  <span className="font-semibold text-black text-lg text-left w-[350px]">Contamos con 11 Años de experiencia</span>
                </div>
                <div className="flex items-center justify-start p-4 w-[480px] h-[100px] rounded-lg bg-gray-200">
                  <span className="text-2xl text-blue-800 font-extrabold w-[100px]">02 /</span>
                  <span className="font-semibold text-black text-lg text-left w-[350px]">Contamos con 100% fibra óptica</span>
                </div>
                <div className="flex items-center justify-start p-4 w-[480px] h-[100px] rounded-lg bg-gray-200">
                  <span className="text-2xl text-blue-800 font-extrabold w-[100px]">03 /</span>
                  <span className="font-semibold text-black text-lg text-left w-[350px]">Para escolares, universitarios, trabajo y negocio</span>
                </div>
                <div className="flex items-center justify-start p-4 w-[480px] h-[100px] rounded-lg bg-gray-200">
                  <span className="text-2xl text-blue-800 font-extrabold w-[100px]">04 /</span>
                  <span className="font-semibold text-black text-lg text-left w-[350px]">Sin plazos de permanencia</span>
                </div>
                <div className="flex items-center justify-start p-4 w-[480px] h-[100px] rounded-lg bg-gray-200">
                  <span className="text-2xl text-blue-800 font-extrabold w-[100px]">05 /</span>
                  <span className="font-semibold text-black text-lg text-left w-[350px]">Sin costo de reconexión</span>
                </div>
                <div className="flex items-center justify-start p-4 w-[480px] h-[100px] rounded-lg bg-gray-200">
                  <span className="text-2xl text-blue-800 font-extrabold w-[100px]">06 /</span>
                  <span className="font-semibold text-black text-lg text-left w-[350px]">Atención personalizada</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
