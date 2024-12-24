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
    <section className="bg-white h-[1200px] w-[100%] ">
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
            className="font-bold text-black text-4xl mb-4"
            style={{
              width: isMobile ? '80vw' : '40vw',
              margin: '0 auto',
            }}
          >
            VENTAJAS DE CONECTARSE A INTERLAN
          </h2>
          <p
            className="font-semibold text-sm text-gray-600 mb-8 pb-10 pt-4"
            style={{
              width: isMobile ? '80vw' : '20vw',
              margin: '0 auto',
            }}
          >
            Primeros con fibra óptica a las casas y negocios de familias peruanas
          </p>
          {!isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center pb-40">
              <div className="grid grid-cols-1 gap-4 order-last md:order-first">
                <div className="flex items-center justify-center">
                  <div className="font-bold text-black text-lg mr-2" style={{ width: '10vw' }}>Contamos con 11 Años de experiencia</div>
                  <div className="bg-white border-8 border-blue-500 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-4xl">01</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="font-bold text-black text-lg mr-2" style={{ width: '10vw' }}>Contamos con 100% fibra óptica</div>
                  <div className="bg-white border-8 border-blue-500 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-4xl">02</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="font-bold text-black text-lg mr-2" style={{ width: '10vw' }}>Para escolares, universitarios, trabajo y negocio</div>
                  <div className="bg-white border-8 border-blue-500 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-4xl">03</div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <Image
                  src="/Assets/021.webp"
                  alt="Segunda imagen de Hero Banner"
                  width={0}
                  height={0}
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                  style={{
                    objectFit: "cover",
                    width: "50vw",
                    height: "auto",
                  }}
                  className="w-auto h-auto"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 order-first md:order-last">
                <div className="flex items-center justify-center">
                  <div className="bg-white border-8 border-blue-500 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-4xl">04</div>
                  <div className="font-bold text-black text-lg ml-2" style={{ width: '10vw' }}>Sin plazos de permanencia</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white border-8 border-blue-500 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-4xl">05</div>
                  <div className="font-bold text-black text-lg ml-2" style={{ width: '10vw' }}>Sin costo de reconexión</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white border-8 border-blue-500 text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-4xl">06</div>
                  <div className="font-bold text-black text-lg ml-2" style={{ width: '10vw' }}>Atención personalizada</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-screen ">
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
