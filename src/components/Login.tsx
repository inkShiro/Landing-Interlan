"use client";

import links from "@/utils/links";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const imageMap: Record<string, string> = {
  A: 'url("/Assets/tile/img00.webp")',
  B: 'url("/Assets/tile/img01.webp")',
  C: 'url("/Assets/tile/img02.webp")',
  D: 'url("/Assets/tile/img03.webp")',
  E: 'url("/Assets/tile/img04.webp")',
  F: 'url("/Assets/tile/img05.webp")',
  G: 'url("/Assets/tile/img06.webp")',
  H: 'url("/Assets/tile/img08.webp")',
  I: 'url("/Assets/tile/img09.webp")',
  J: "background-color: #EEEEEE",
  K: "background-color: #EEEEEE",
};

const generateRandomColorCode = () => {
  const originalCode = "ABCDEFGHKKIJJJKKJJ";
  const chars = originalCode.split("");
  const kPositions: number[] = [];

  chars.forEach((char, i) => {
    if (char === "K") kPositions.push(i);
  });

  const nonKChars = chars.filter((char) => char !== "K");

  for (let i = nonKChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nonKChars[i], nonKChars[j]] = [nonKChars[j], nonKChars[i]];
  }

  kPositions.forEach((pos) => {
    nonKChars.splice(pos, 0, "K");
  });

  return nonKChars.join("");
};

const getImagesFromCode = (colorCode: string) => {
  return colorCode.split("").map((letter) => imageMap[letter] || "background-color: gray");
};

const Login: React.FC = () => {
  const isMobile = useIsMobile();

  const applyBackgroundImages = () => {
    const cells = document.querySelectorAll<HTMLDivElement>(".cell");
    const randomColorCode = generateRandomColorCode();
    const images = getImagesFromCode(randomColorCode);

    cells.forEach((cell, index) => {
      const style = images[index % images.length];
      if (style.includes("background-color")) {
        cell.style.backgroundColor = style.split(":")[1].trim();
        cell.style.backgroundImage = "";
      } else {
        cell.style.backgroundImage = style;
        cell.style.backgroundSize = "cover";
        cell.style.backgroundPosition = "center";
        cell.style.backgroundColor = "";
      }
    });

    cells.forEach((cell) => {
      cell.style.opacity = "1";
    });
  };

  useEffect(() => {
    applyBackgroundImages();

    const intervalId = setInterval(() => {
      const cells = document.querySelectorAll<HTMLDivElement>(".cell");
      cells.forEach((cell) => (cell.style.opacity = "0"));

      setTimeout(() => {
        applyBackgroundImages();
      }, 1000);
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-full bg-[#EEEEEE] overflow-hidden">
      <div
        className={`absolute z-10 bg-[#EEEEEE] px-8 py-6 rounded-lg form-container h-auto ${isMobile ? "w-full h-[60%] max-w-none top-1/2" : "w-[90%] max-w-[400px] top-2/3"
          } left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <form>
          <h2 className="mb-4 text-3xl font-bold text-[#0095FF] text-left">
            BIENVENIDO A INTERLAN
          </h2>
          <div className="flex items-center mb-6 text-sm text-gray-700">
            <span className="text-6xl mx-6 text-gray-500 font-extrabold">/</span>
            <p className="text-xs text-[#635B8A] mr-6">
              Primeros con fibra óptica a las casas y negocios de familias peruanas
            </p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="DNI / RUC / Código"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2 rounded focus:ring-2 focus:ring-blue-500" />
            <label className="text-sm text-gray-700">Recordar mis datos</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <Link href={links.login}>
              INGRESAR
            </Link>
          </button>
        </form>
      </div>
      <section className="h-[100vh] w-full">
        <div
          className={`grid ${isMobile ? "grid-cols-3" : "grid-cols-6"
            } grid-rows-3 grid-container h-[100vh] w-full`}
        >
          {Array.from({ length: isMobile ? 9 : 18 }).map((_, index) => (
            <div className="cell transition-opacity duration-300 opacity-0" key={index}></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Login;
