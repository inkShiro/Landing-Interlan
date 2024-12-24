import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import Login from "@/components/Login";
import links from "@/utils/links";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <>
      <nav className="bg-[#150140] p-4 py-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-24">
          <div className="flex mr-4 items-center">
            <button>
              <Link href={links.home} className="block">
                <Image
                  src="/Assets/028.webp"
                  alt="Segunda imagen de Hero Banner"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, (max-width: 1200px) 24vw, 12vw"
                  style={{
                    objectFit: 'cover',
                    width: 'auto',
                    height: 'auto',
                  }}
                  className="hover:shadow-lg transition-shadow duration-300 ease-in-out"
                />
              </Link>
            </button>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-8 text-white font-semibold text-lg flex-nowrap items-center">
              <li>
                <Link href={links.home} className="hover:text-gray-400 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href={links.plans} className="hover:text-gray-400 transition-colors duration-300">
                  Planes+
                </Link>
              </li>
              <li>
                <Link href={links.coverage} className="hover:text-gray-400 transition-colors duration-300">
                  Cobertura
                </Link>
              </li>
              <li>
                <Link href={links.payment} className="hover:text-gray-400 transition-colors duration-300">
                  Formas de pago
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 items-center">
              <Link href={links.facebook}>
                <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-300 hover:text-white transition-all duration-300">
                  <FaFacebookF className="text-blue-600" />
                </button>
              </Link>
              <Link href={links.youtube}>
                <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-red-300 hover:text-white transition-all duration-300">
                  <FaYoutube className="text-red-600" />
                </button>
              </Link>
              <Link href={links.instagram}>
                <button className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-200 hover:bg-pink-300 hover:text-white transition-all duration-300">
                  <FaInstagram className="text-white" />
                </button>
              </Link>
              <button
                onClick={toggleLogin}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Mi panel
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLogin}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Mi panel
            </button>
            <button onClick={toggleMenu} className="text-white ml-4">
              <span className="text-4xl hover:text-gray-400 transition-colors duration-300">{isMenuOpen ? 'X' : '⋮'}</span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col bg-white p-4 mt-4 rounded-lg shadow-lg">
            <ul className="text-gray-700 font-medium space-y-6">
              <li className="border-b mx-4 pb-2">
                <Link
                  href={links.home}
                  className="block text-lg hover:text-gray-500 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li className="border-b mx-4 pb-2">
                <Link
                  href={links.plans}
                  className="block text-lg hover:text-gray-500 transition-colors duration-300">
                  Planes+
                </Link>
              </li>
              <li className="border-b mx-4 pb-2">
                <Link
                  href={links.coverage}
                  className="block text-lg hover:text-gray-500 transition-colors duration-300">
                  Cobertura
                </Link>
              </li>
              <li className="border-b mx-4 pb-2">
                <Link
                  href={links.payment}
                  className="block text-lg hover:text-gray-500 transition-colors duration-300">
                  Formas de pago
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href={links.buy_plan}
                className="block bg-blue-500 text-white text-center text-lg py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Compra tu plan
              </Link>
            </div>
          </div>
        )}
      </nav>
      {showLogin && (
        <div
          className={`bg-gray-100 z-10 transition-opacity duration-500 ease-in-out ${showLogin ? "opacity-100" : "opacity-0"
            }`}
        >
          <Login />
        </div>
      )}
    </>
  );
};

export default Navbar;
