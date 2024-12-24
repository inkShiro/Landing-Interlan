import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import links from "@/utils/links";

const TerminosYCondiciones: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`bg-white w-full h-[24vh] overflow-hidden text-center flex ${isMobile ? 'flex-col justify-center items-center' : ' flex-row justify-center '
        }`}
    >
      <div className={`${isMobile ? 'text-center' : ''}`}>
        <Link href={links.Website_Terms_of_Use}>
          <button className="bg-[#0095FF] text-white font-semibold rounded-md px-6 py-4">
            Ver Términos aquí
          </button>
        </Link>
        <p
          className={`text-[#666666] font-extrabold text-lg ${isMobile ? 'mt-8 block' : 'mt-8'
            }`}
        >
          *VER NUESTROS TÉRMINOS Y CONDICIONES
        </p>
      </div>
    </section>
  );
};

export default TerminosYCondiciones;
