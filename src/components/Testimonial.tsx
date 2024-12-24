import { FC, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  date: string;
  rating: number;
}

const testimonios: Testimonial[] = [
  {
    name: 'María Gómez',
    role: 'Gerente de TI',
    text: 'La conexión a internet de esta empresa ha sido fundamental para mejorar la productividad de nuestra oficina. Es rápida y confiable, ideal para el trabajo remoto.',
    date: '12 de diciembre de 2024',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    role: 'Propietario de restaurante',
    text: 'El servicio de internet que ofrecen ha sido un cambio total para mi negocio. La velocidad y estabilidad nos permiten manejar pedidos y pagos de forma eficiente.',
    date: '11 de diciembre de 2024',
    rating: 4,
  },
  {
    name: 'Sofía Martínez',
    role: 'Freelancer',
    text: 'Como trabajadora independiente, necesito una conexión constante y sin interrupciones. Esta empresa me ha brindado el mejor servicio de internet que he probado hasta ahora.',
    date: '10 de diciembre de 2024',
    rating: 5,
  },
  {
    name: 'Pedro Fernández',
    role: 'Director de Marketing',
    text: 'La conexión de alta velocidad ha mejorado nuestra capacidad para realizar videollamadas y transferir grandes archivos sin problemas. Recomendado al 100%.',
    date: '9 de diciembre de 2024',
    rating: 4,
  },
  {
    name: 'Laura Díaz',
    role: 'Cliente residencial',
    text: 'Desde que cambiamos a este proveedor de internet, la velocidad y la estabilidad son excepcionales. Ya no tengo problemas con la señal en ninguna parte de mi casa.',
    date: '8 de diciembre de 2024',
    rating: 5,
  },
];

const Testimonios: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsToShow = isMobile ? 1 : 3;

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + itemsToShow) % testimonios.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonios.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  const visibleTestimonials = testimonios.slice(
    currentTestimonial,
    currentTestimonial + itemsToShow
  );

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-4">
          <div>
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FiChevronLeft size={24} />
            </button>
          </div>
          <span className="text-3xl font-bold text-gray-800 align-middle">TESTIMONIOS</span>
          <div>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
        <div
          className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row space-x-8'
            } justify-center mt-12`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F2F0F0] shadow-lg rounded-lg p-6 w-80 flex flex-col items-center text-center"
            >
              <h3 className="text-xl text-black font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-sm text-gray-400 mb-2">{testimonial.date}</p>
              <div className="flex mb-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.27l-3.763 2.293 1.455-4.961-3.867-3.021 4.923-.03L10 0l1.455 4.548 4.923.03-3.867 3.021 1.455 4.961L10 15.27z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
