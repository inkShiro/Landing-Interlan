import { useState, useEffect } from 'react';
import Link from 'next/link';
import links from "@/utils/links";

const BannerInterlan = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative bg-white text-black py-12 px-4 h-[180px] w-auto">
      <div>
        <div className="absolute inset-0 top-2 flex justify-center items-center z-10 overflow-hidden">
          <span
            className="font-extrabold text-9xl text-black opacity-10 transform scale-x-[1.7] scale-y-[1.7] translate-y-[0px]" // Ajuste de la posición vertical
            style={{
              WebkitTextStroke: '2px black',
              color: 'white',
            }
            }
          >
            INTERLAN
          </span>
        </div>

        <div className={`w-[80vw] h-auto top-[40%] mx-auto absolute inset-0 flex justify-center items-center z-10`}>
          <div className={`relative z-10 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 text-center mb-12 items-center`}>
            <div className="flex justify-center m-12">
              <span className="font-extrabold text-2xl text-blue-500">
                MANTENTE SIEMPRE CONECTADO
              </span>
            </div>
            <div className="flex justify-center items-center">
              {!isMobile && (
                <p className="text-6xl text-gray-500">/</p>
              )}
              <p className="text-xl text-gray-500 px-0">
                Primeros con fibra óptica a las casas y negocios de familias peruanas
              </p>
            </div>
            <div className="flex justify-center">
              <Link href={links.plans}>
                <button className="py-2 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition">
                  Ver planes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerInterlan;
