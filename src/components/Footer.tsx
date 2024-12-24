import { FC, useState, useEffect } from "react";
import Link from 'next/link';
import links from "@/utils/links";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showRights, setShowRights] = useState(false);
  const [showUtility, setShowUtility] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowContact(false);
      setShowUserInfo(false);
      setShowRights(false);
      setShowUtility(false);
    } else {
      setShowContact(true);
      setShowUserInfo(true);
      setShowRights(true);
      setShowUtility(true);
    }
  }, [isMobile])

  return (
    <footer className="bg-[rgb(21,1,64)] text-white overflow-hidden">
      <div className="bg-[#F2F0F0] p-4 justify-center py-8">
        <div className={`w-[80vw] flex ${isMobile ? ' mx-auto flex-col items-center' : ' mx-auto flex-row flex-nowrap items-center'}`}>
          <Link href={links.MTC}>
            <button className={` transition-transform ${isMobile ? 'scale-[3] my-10 hover:scale-[3.05] ' : 'mb-2 hover:scale-105'}`}>
              <Image
                src="/Assets/025.webp"
                alt="Segunda imagen de Hero Banner"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                style={{
                  objectFit: "cover",
                  width: "12vw",
                  height: "auto",
                }}
                className={`w-auto h-auto rounded-md transition-all${isMobile ? '' : ''}`}
              />
            </button>
            {!isMobile && <span className="text-9xl text-gray-500 px-4">/</span>}
          </Link>
          <Link href={links.osiptel}>
            <button className={` transition-transform ${isMobile ? 'scale-[3] my-10 hover:scale-[3.05] ' : 'mb-2 hover:scale-105'}`}>
              <Image
                src="/Assets/026.webp"
                alt="Segunda imagen de Hero Banner"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                style={{
                  objectFit: "cover",
                  width: "12vw",
                  height: "auto",
                }}
                className="w-auto h-auto rounded-md transition-all"
              />
            </button>
          </Link>
          {!isMobile && <span className="text-9xl text-gray-500 px-4">/</span>}
          <Link href={links.pronatel}>
            <button className={` transition-transform ${isMobile ? 'scale-[3] my-10 hover:scale-[3.05] ' : 'mb-2 hover:scale-105'}`}>
              <Image
                src="/Assets/027.webp"
                alt="Segunda imagen de Hero Banner"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                style={{
                  objectFit: "cover",
                  width: "12vw",
                  height: "auto",
                }}
                className="w-auto h-auto rounded-md transition-all"
              />
            </button>
          </Link>
          <div className={`h-full ml-8 ${isMobile ? 'mt-4 w-[80vw]' : 'w-[30vw]'}`}>
            <span className="text-xs text-gray-500 font-bold">
              Conforme la ley N* 00000 y Resolución de consejo Directivo N* 00000-0000-CD/OSIPTEL
              desde el 03 de marzo 2022 las operadoras deberán garantizar el 52% de velocidad
              contratada, sin embargo, INTERLANT ofrece a todos sus clientes una velocidad mínima
              garantizada del 70% de la velocidad contratada (velocidad de subida y de descarga).
            </span>
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-5 place-items-center content-center py-12">
        <div className={`flex flex-col items-center p-12 ${isMobile ? '' : ' border-r-2'} border-white h-full w-full content-center`}>
          <Link href={links.home}>
            <button className="mb-2 hover:scale-105 transition-transform">
              <Image
                src="/Assets/024.webp"
                alt="Segunda imagen de Hero Banner"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                style={{
                  objectFit: "cover",
                  width: "40vw",
                  height: "auto",
                }}
                className="w-auto h-auto hover:brightness-110 transition-all"
              />
            </button>
          </Link>
          <p className="text-white text-xs mb-4 text-center">Mantente siempre conectado</p>
          <div className={`flex  ${isMobile ? 'gap-4 scale-[1.6]' : 'gap-2'
            } py-2 justify-center`}>
            <Link href={links.facebook}>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all">
                <FaFacebookF className="text-blue-600" />
              </button>
            </Link>
            <Link href={links.youtube}>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all">
                <FaYoutube className="text-red-600" />
              </button>
            </Link>
            <Link href={links.instagram}>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-200 hover:bg-pink-500 hover:text-white transition-all">
                <FaInstagram className="text-white" />
              </button>
            </Link>
            <Link href={links.linkedin}>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all">
                <FaLinkedinIn className="text-blue-600" />
              </button>
            </Link>
            <Link href={links.twitter}>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-blue-500 hover:text-white transition-all">
                <FaTwitter className="text-blue-600" />
              </button>
            </Link>
          </div>
          <Link href={links.reclaimbook}>
            <button className="mt-4 hover:scale-105 transition-transform">
              <Image
                src="/Assets/023.webp"
                alt="Segunda imagen de Hero Banner"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                style={{
                  objectFit: "cover",
                  width: "40vw",
                  height: "auto",
                }}
                className="w-auto h-auto hover:brightness-110 transition-all"
              />
            </button>
          </Link>
          <p className="text-white text-sm text-center mt-4">Libro de reclamaciones</p>
        </div>
        <div className={`${isMobile ? 'px-20 border-t-2 my-8 bg-slate-900 w-[120%] text-lg' : 'px-12 border-l-2 border-r-2 w-full'} text-xs border-white h-full content-center`}>
          <button
            onClick={() => setShowContact(!showContact)}
            disabled={!isMobile}
          >
            <h3 className={`${isMobile ? "text-5xl font-bold" : "text-lg"} text-left underline mb-4 py-4 `}>
              Contacto</h3>
          </button>
          {showContact && (
            <>
              <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>Dirección fiscal</p>
              <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>Central</p>
              <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>Av. Colocar dirección</p>
              <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>Nro. 000 - 0000</p>
              <div className="mt-4">
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>Central</p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>(01) 0000 000</p>
              </div>
              <div className="mt-4">
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}>Email</p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.mail}>cvemo@interlanperu.com</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.info}>info@interlan.pe</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.Itl}>http://Itl.com.pe</Link></p>
              </div>
            </>
          )}
        </div>
        <div className={`${isMobile ? 'px-20 border-t-2 my-8 w-[120%] text-lg' : 'px-12 border-l-2 border-r-2 w-full'} text-xs border-white h-full content-center`}>
          <button
            onClick={() => setShowUserInfo(!showUserInfo)}
            disabled={!isMobile}
          >
            <h3 className={`${isMobile ? "text-5xl font-bold" : "text-lg"} text-left underline mb-4 py-4 `}>
              Información de abonados y usuarios
            </h3>
          </button>
          {showUserInfo && (
            <>
              <div className="space-y-2">
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.reclaims}>¿Cómo reclamar?</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.use_conditions}>Condiciones de uso</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.reclaims_directive}>Directiva de reclamos</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.Payment_methods}>Medios de pago</Link></p>
              </div>
              <div className="mt-4 space-y-2">
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.Website_Terms_of_Use}>Condiciones de uso del sitio web</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.Internet_use_policy}>Política de uso de internet</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.Cookies_policy}>Política de cookies</Link></p>
              </div>
            </>
          )}
        </div>

        <div className={`${isMobile ? 'px-20 border-t-2 my-8 bg-slate-900 w-[120%] text-lg' : 'px-12 border-l-2 border-r-2 w-full'} text-xs border-white h-full content-center`}>
          <button
            onClick={() => setShowRights(!showRights)}
            disabled={!isMobile}
          >
            <h3 className={`${isMobile ? "text-5xl font-bold" : "text-lg"} text-left underline mb-4 py-4 `}>
              Tus derechos
            </h3>
          </button>
          {showRights && (
            <>
              <div className="space-y-2">
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.rights}>Entérate de tus derechos</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.neutrality_regulation}>Reglamento de neutralidad</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.social_media_privacy_policy}>Política de privacidad en redes sociales</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.website_privacy_policy}>Política de privacidad del sitio web</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.return_interruption}>Devolución por interrupciones</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.institutional}>Institucional</Link></p>
              </div>
            </>
          )}
        </div>

        <div className={`${isMobile ? 'px-20 border-t-2 my-8 w-[120%] text-lg' : 'px-12 border-l-2 w-full'} text-xs border-white h-full content-center`}>
          <button
            onClick={() => setShowUtility(!showUtility)}
            disabled={!isMobile}
          >
            <h3 className={`${isMobile ? "text-5xl font-bold" : "text-lg"} text-left underline mb-4 py-4 `}>
              De utilidad
            </h3>
          </button>
          {showUtility && (
            <>
              <div className="space-y-2">
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.buy_plan}>Compra tu plan</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.we}>Nosotros</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.blog}>Blog</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.faq}>Preguntas frecuentes</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.my_portal}>Mi portal</Link></p>
                <p className={`${isMobile ? 'text-4xl py-4' : 'text-xs'}`}><Link href={links.promotions}>Promociones</Link></p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="bg-[#1A1A1A] text-center text-sm text-white h-[4vh] content-center w-full">
        <span className="font-bold">© 2024 INTERLAN </span>
        <span> / Todos los Derechos Reservados / Diseñado por Stdio X</span>
      </div>
    </footer>
  );
};

export default Footer;
