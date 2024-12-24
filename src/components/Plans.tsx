import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import links from '@/utils/links_plans';
import Link from 'next/link';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('SOLO INTERNET');
  const [isMobile, setIsMobile] = useState(false);

  const soloInternetImages = ['016.webp', '017.webp', '018.webp', '019.webp'];
  const duoImages = ['033.webp', '034.webp', '035.webp'];

  const buttonColors = selectedPlan === 'SOLO INTERNET' ? ['#E34C34', '#66BA92', '#F9B62B', '#0194FF'] : ['#E34C34', '#F9B62B', '#0194FF'];

  const imagesToDisplay = selectedPlan === 'SOLO INTERNET' ? soloInternetImages : duoImages;


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesToDisplay.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesToDisplay.length) % imagesToDisplay.length);
  };

  const getPlanLink = () => {
    if (selectedPlan === 'SOLO INTERNET') {
      return links[`planinternet0${currentIndex}`];
    } else {
      return links[`planduo0${currentIndex}`];
    }
  };

  return (
    <section id='Plans' className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 mx-auto pr-6" style={{ width: '65vw' }}>
          <h2 className="text-2xl font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            NUESTROS PLANES DE INTERNET 100% FIBRA ÓPTICA
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedPlan('SOLO INTERNET')}
              className={`${selectedPlan === 'SOLO INTERNET' ? 'bg-gray-300 text-black border-black' : 'bg-white text-gray-500 border-gray-400'
                } py-2 px-6 font-semibold text-2xl border-2 rounded-md transition-all`}
            >
              SOLO INTERNET
            </button>
            <button
              onClick={() => setSelectedPlan('DUO')}
              className={`${selectedPlan === 'DUO' ? 'bg-gray-300 text-black border-black' : 'bg-white text-gray-500 border-gray-400'
                } py-2 px-6 font-semibold text-2xl border-2 rounded-md transition-all`}
            >
              DUO
            </button>
          </div>
        </div>
        {isMobile ? (
          <div className="relative w-full overflow-hidden">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-20"
            >
              <FaChevronLeft size={24} />
            </button>
            <div className="w-[70%]  translate-x-[36%] h-[calc(100%_-_140px)] relative">
              <Image
                src={`/Assets/${imagesToDisplay[currentIndex]}`}
                alt={`Imagen ${imagesToDisplay[currentIndex]}`}
                width={800}
                height={300}
                className="w-[70%] h-full shadow-lg rounded-3xl"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </div>
            <div className="mt-4 flex justify-center mx-auto">
              <Link
                href={getPlanLink()}
                className="text-white py-2 px-8 rounded-md font-semibold shadow-xl hover:shadow-2xl hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: buttonColors[currentIndex] }}
              >
                QUIERO ESTE PLAN
              </Link>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-20"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-24">
            {imagesToDisplay.map((image, currentIndex) => (
              <div key={currentIndex} className="relative">
                <div className="relative group">
                  <div className="w-full h-[calc(100%_-_140px)] relative">
                    <Image
                      src={`/Assets/${image}`}
                      alt={`Imagen ${image}`}
                      width={800}
                      height={300}
                      className="w-full h-[calc(100%_-_140px)] shadow-lg rounded-3xl hover:shadow-2xl transition-all"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                      }}
                    />
                  </div>
                  <div className="mt-4 flex justify-center mx-auto">
                    <Link
                      href={getPlanLink()}
                      className="text-white py-2 px-8 rounded-md font-semibold shadow-xl hover:shadow-2xl hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out"
                      style={{ backgroundColor: buttonColors[currentIndex] }}
                    >
                      QUIERO ESTE PLAN
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 text-xs text-gray-600 mx-auto text-center sm:text-left" style={{ width: '60vw' }}>
          <p>
            Cobertura en los distritos de La cobertura, distritos de Huánuco, Amarilis y Pillco Marca. Sujeto a evaluación crediticia y factibilidades técnicas. 70% de velocidad garantizada medido mediante
            cableado CAT6 desde el puerto ethernet. Tarjeta de red de equipos deben soportar la velocidad contratada. Interlan ofrece una red de transmisión totalmente de fibra óptica desde nuestro centro
            de distribución principal hasta la ONT del cliente. Mayor información sobre términos y condiciones en{' '}
            <Link href={links.win_pe_promociones} className="text-blue-500">
              www.win.pe/promociones
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
