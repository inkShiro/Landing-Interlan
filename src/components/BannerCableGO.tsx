import Link from 'next/link';
import Image from 'next/image';
import { FaTv } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import links from '@/utils/links';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const BannerCableGO = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`relative ${isMobile
      ? ' h-[120vh]'
      : 'h-[60vh]'
      } bg-white text-black py-12 px-4  w-full"`}
    >
      <div
        className={`absolute left-1/2 top-1/2 transform ${isMobile
          ? '-translate-x-1/2 -translate-y-[20%] h-[500px] w-[90vw]'
          : '-translate-x-1/2 -translate-y-[33%] h-[210px] w-[60vw]'
          } bg-gradient-to-tl from-[#3972AA] to-[#121329] rounded-3xl overflow-hidden mt-18`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 transform  ${isMobile
          ? '-translate-x-1/2 -translate-y-[20%] w-[90vw] h-[500px]'
          : '-translate-x-1/2 -translate-y-1/2 w-[60vw] h-[280px]'
          } rounded-3xl overflow-hidden mt-18`}
      >
        <Image
          src="/Assets/012.webp"
          alt="Imagen encima de la segunda imagen"
          width={0}
          height={0}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
          style={{
            objectFit: 'cover',
            width: isMobile ? '0px' : '22vw',
            height: 'auto',
            position: 'absolute',
            top: 10,
          }}
          className="rounded-md left-[36vw] bottom-0 hover:scale-[1.01] transition-all"
        />
        <Link href={links.Appstore}>
          <button
            className="absolute"
            style={{
              right: isMobile ? '20%' : '20%',
              bottom: isMobile ? '10%' : '3%',
              scale: isMobile ? '3' : '1',
              width: '10vw',
              height: 'auto',
            }}
          >
            <Image
              src="/Assets/030.webp"
              alt="Imagen de botón"
              width={0}
              height={0}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
              style={{
                objectFit: 'cover',
                width: '10vw',
                height: 'auto',
              }}
              className="rounded-md hover:scale-[1.01] transition-all"
            />
          </button>
        </Link>
        <Link href={links.Playstore}>
          <button
            className="absolute"
            style={{
              left: isMobile ? '20%' : '82%',
              bottom: isMobile ? '10%' : '3%',
              scale: isMobile ? '3' : '1',
              width: '10vw',
              height: 'auto',
            }}
          >
            <Image
              src="/Assets/031.webp"
              alt="Imagen de botón"
              width={0}
              height={0}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
              style={{
                objectFit: 'cover',
                width: '10vw',
                height: 'auto',
              }}
              className="rounded-md hover:scale-[1.01] transition-all"
            />
          </button>
        </Link>
        <div
          className={`absolute  ${isMobile
            ? 'top-[0%] left-[4%] h-[60vh] w-[80vw] flex flex-col'
            : '-top-1/3 left-[2vw] h-[40vh] w-[40vw] translate-y-1/2'
            } transform m-2 flex flex-col justify-center`}
        >
          <div
            className={`${isMobile
              ? 'bottom-[-10%] left-[0%] h-[60vh] w-[80vw] flex flex-col'
              : 'bottom-[-4%] left-[0vw] h-[40vh] w-[40vw] -translate-y-1/2'
              } transform  m-2 flex flex-col justify-center`}
            style={{
              transform: isMobile ? 'scale(1.7)' : 'scale(1)',
              transformOrigin: 'center',
            }}
          >
            <div
              className={`flex ${isMobile ? 'items-center flex-col space-y-4' : 'items-center space-x-6'
                }`}
            >
              <Image
                src="/Assets/015.webp"
                alt="Imagen decorativa"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                style={{
                  objectFit: 'cover',
                  width: isMobile ? '20vw' : '12vw',
                  height: 'auto',
                }}
                className="rounded-md hover:scale-[1.01] transition-all"
              />
              <div
                className={`flex ${isMobile ? 'flex-col items-center space-y-2' : 'flex-nowrap items-center'
                  }`}
              >
                {!isMobile && (
                  <span className="text-5xl mx-4 text-white font-extrabold">/</span>
                )}
                <span className="text-lg mx-6 text-white">Televisión por streaming</span>
              </div>
            </div>
            <div
              className={`flex ${isMobile ? 'flex-col items-center space-y-4' : 'items-center space-x-6'
                }`}
            >
              <span
                className={`py-1 border-b-2 border-white text-white ${isMobile ? 'pl-8 pr-8 text-xs' : 'text-sm pl-2 pr-8'
                  }`}
              >
                Adquiérelo con algunos de nuestros planes
              </span>
            </div>
            <div
              className={`flex ${isMobile ? 'flex-col items-center space-y-4' : 'items-center space-x-6'
                } mt-2`}
            >
              <FaTv size={isMobile ? 36 : 48} color="white" />
              <div
                className={`flex ${isMobile ? 'flex-col items-center space-y-2' : 'flex-nowrap items-center'
                  }`}
              >
                <span className="text-sm text-white font-bold">
                  +90 Canales de televisión
                </span>
                {!isMobile && (
                  <span className="text-5xl mx-4 text-white font-extrabold">/</span>
                )}
                <span className={`flex ${isMobile ? "" : "w-10"} text-sm text-white font-semibold `}
                >
                  NACIONALES E INTERNACIONALES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCableGO;
