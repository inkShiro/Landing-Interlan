import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import links from "@/utils/links";

const RedesSociales: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-white py-12 px-4 flex justify-center flex-col overflow-hidden">
      <span className="text-center text-black text-3xl font-bold pb-4">REDES SOCIALES</span>
      <div className={`flex  ${
          isMobile ? 'gap-4 scale-[1.7]' : 'gap-2'
        } py-2 justify-center`}>
        <Link href={links.facebook}>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all">
            <FaFacebookF className="text-blue-600" />
          </button>
        </Link>
        <Link href={links.youtube}>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all">
            <FaYoutube className="text-red-600" />
          </button>
        </Link>
        <Link href={links.instagram}>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-200 hover:bg-pink-500 hover:text-white transition-all">
            <FaInstagram className="text-white" />
          </button>
        </Link>
        <Link href={links.linkedin}>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all">
            <FaLinkedinIn className="text-blue-600" />
          </button>
        </Link>
        <Link href={links.twitter}>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-500 hover:text-white transition-all">
            <FaTwitter className="text-blue-600" />
          </button>
        </Link>
      </div>
      <div
        className={`grid ${
          isMobile ? 'grid-cols-2' : 'grid-cols-5'
        } gap-4 w-full max-w-4xl mx-auto my-10`}
      >
        {[...Array(5)].slice(0, isMobile ? 4 : 5).map((_, index) => (
          <div
            key={index}
            className="w-full h-48 border border-gray-300 bg-slate-200"
          ></div>
        ))}
      </div>
      <div className="text-gray-500 text-lg font-semibold text-center">
        <span>Visita nuestras redes y conócenos más y no te pierdas de las promociones</span>
      </div>
    </section>
  );
};

export default RedesSociales;
