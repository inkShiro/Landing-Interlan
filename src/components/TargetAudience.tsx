import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const TargetAudience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    { name: 'Gamers', image: '/Assets/006.webp', bgPosition: 'center' },
    { name: 'Escolares', image: '/Assets/007.webp', bgPosition: 'center' },
    { name: 'Casas', image: '/Assets/009.webp', bgPosition: 'left 30%' },
    { name: 'Negocios', image: '/Assets/008.webp', bgPosition: '60%' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center relative px-12">
        <button
          onClick={handlePrevious}
          className="absolute top-4 left-[10%] transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-8 text-black">DIRIGIDO PARA</h2>
        <button
          onClick={handleNext}
          className="absolute top-4 right-[10%] transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
        {isMobile ? (
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full h-64">
              <Image
                src={cards[currentIndex].image}
                alt={cards[currentIndex].name}
                fill
                sizes="(max-width: 768px) 100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: cards[currentIndex].bgPosition
                }}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 w-full text-center">
                <h3 className="text-2xl font-semibold text-white">{cards[currentIndex].name}</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-auto place-items-center max-w-7xl px-24">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative shadow-lg rounded-lg flex flex-col items-center h-64 w-52 transform transition-all duration-500 ease-in-out ${index === currentIndex ? 'scale-110' : 'scale-100'
                  } cursor-pointer`}
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: card.bgPosition,
                  }}
                  className="rounded-lg"
                />
                <div className="absolute bottom-4 w-full text-center">
                  <h3 className="text-2xl font-semibold text-white">{card.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="absolute bottom-[-32px] left-0 right-0 flex justify-center items-center space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-400' : 'bg-white'
                } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
