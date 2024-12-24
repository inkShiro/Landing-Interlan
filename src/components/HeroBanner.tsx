"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [IdBanner, setIdBanner] = useState(1);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    const element = document.getElementById("hero-banner");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 10000);

    return () => clearInterval(interval);
  }, [IdBanner]);

  const handleDecrement = () => {
    setDirection("left");
    setTimeout(() => {
      setIdBanner((prev) => (prev === 1 ? 3 : prev - 1));
      setDirection(null);
    }, 500);
  };

  const handleIncrement = () => {
    setDirection("right");
    setTimeout(() => {
      setIdBanner((prev) => (prev === 3 ? 1 : prev + 1));
      setDirection(null);
    }, 500);
  };

  const getAnimationClass = (currentId: number) => {
    const isLeftJump = direction === "left" && IdBanner === 1 && currentId === 3;
    const isRightJump = direction === "right" && IdBanner === 3 && currentId === 1;

    if (isLeftJump) {
      return "animate-move-in-left";
    }

    if (isRightJump) {
      return "animate-move-in-right";
    }

    if (direction === "left" && currentId === IdBanner) {
      setTimeout(() => {
      }, 1000);
      return "animate-move-out-right";
    }

    if (direction === "right" && currentId === IdBanner) {
      setTimeout(() => {
      }, 1000);
      return "animate-move-out-left";
    }

    if (direction === "left" && currentId === IdBanner - 1) {
      return "animate-move-in-left";
    }

    if (direction === "right" && currentId === IdBanner + 1) {
      return "animate-move-in-right";
    }

    if (currentId === IdBanner) {
      return "animate-move-in";
    }

    return "hidden";
  };


  return (
    <section
      id="hero-banner"
      className={`relative overflow-hidden ${isMobile ? "h-[700px]" : "h-[800px]"}`}
      style={{ backgroundColor: "#EFF6FF" }}
    >
      <div
        id="banner-container"
        className="p-8 absolute inset-0 flex justify-between items-center"
        style={{
          backgroundImage: "url(/Assets/036.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "url(/Assets/mask00.png)",
          WebkitMaskImage: "url(/Assets/mask00.png)",
          maskSize: "cover",
          WebkitMaskSize: "cover",
        }}
      >
        <button
          onClick={handleDecrement}
          className="z-10 text-white p-4 bg-black rounded-full hover:bg-gray-800 transition duration-200"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        {IdBanner === 1 && (
          <div className={`relative w-full h-full p-12 transition-all duration-500 ${getAnimationClass(1)}`}>
            <Image
              src="/Assets/000.webp"
              alt="Fondo de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible
                ? "translateY(8vh) scaleY(1.55) scaleX(-1.55)" 
                : "translateY(10vh) scaleY(1.5) scaleX(-1.5)"
                : isVisible
                ? "translateY(8vh) scaleY(1.15) scaleX(-1.15)" 
                : "translateY(10vh) scaleY(1.1) scaleX(-1.1)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
            <Image
              src="/Assets/001.webp"
              alt="Segunda imagen de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible
                  ? "translateY(-30vh) translateX(-18vw) scaleY(0.65) scaleX(0.65)"
                  : "translateY(-30vh) translateX(-18vw) scaleY(0.6) scaleX(0.6)"
                : isVisible
                  ? "translateY(-10vh) translateX(26vw) scaleY(0.35) scaleX(0.35)"
                  : "translateY(-10vh) translateX(26vw) scaleY(0.3) scaleX(0.3)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
            <Image
              src="/Assets/003.webp"
              alt="Cuarta imagen de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 35vw, 25vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible 
                  ? "translateY(20vh) translateX(0vw) scaleY(0.85) scaleX(0.85)" 
                  : "translateY(20vh) translateX(0vw) scaleY(0.8) scaleX(0.8)"
                : isVisible
                  ? "translateY(14vh) translateX(-18vw) scaleY(0.45) scaleX(0.45)" 
                  : "translateY(14vh) translateX(-18vw) scaleY(0.4) scaleX(0.4)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
          </div>
        )}
        {IdBanner === 2 && (
          <div className={`relative w-full h-full p-12 transition-all duration-500 ${getAnimationClass(2)}`}>
            <Image
              src="/Assets/004.webp"
              alt="Fondo de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible
                ? "translateY(14vh) scaleY(1.55) scaleX(-1.55)" 
                : "translateY(16vh) scaleY(1.5) scaleX(-1.5)"
                : isVisible
                ? "translateY(8vh) scaleY(1.15) scaleX(-1.15)" 
                : "translateY(10vh) scaleY(1.1) scaleX(-1.1)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
            <Image
              src="/Assets/001.webp"
              alt="Segunda imagen de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible 
                  ? "translateY(20vh) translateX(24vw) scaleY(0.65) scaleX(0.65)" 
                  : "translateY(20vh) translateX(24vw) scaleY(0.6) scaleX(0.6)"
                : isVisible 
                  ? "translateY(-24vh) translateX(24vw) scaleY(0.35) scaleX(0.35)" 
                  : "translateY(-24vh) translateX(24vw) scaleY(0.3) scaleX(0.3)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
            <Image
              src="/Assets/002.webp"
              alt="Tercera imagen de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 15vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible 
                  ? "translateY(-26vh) translateX(16vw) scaleY(0.65) scaleX(0.65)" 
                  : "translateY(-26vh) translateX(16vw) scaleY(0.6) scaleX(0.6)"
                : isVisible 
                  ? "translateY(14vh) translateX(-24vw) scaleY(0.35) scaleX(0.35)" 
                  : "translateY(14vh) translateX(-24vw) scaleY(0.3) scaleX(0.3)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
          </div>
        )}
        {IdBanner === 3 && (
          <div className={`relative w-full h-full p-12 transition-all duration-500 ${getAnimationClass(3)}`}>
            <Image
              src="/Assets/005.webp"
              alt="Fondo de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible
                ? "translateY(8vh) scaleY(1.55) scaleX(-1.55)" 
                : "translateY(10vh) scaleY(1.5) scaleX(-1.5)"
                : isVisible
                ? "translateY(8vh) scaleY(1.15) scaleX(-1.15)" 
                : "translateY(10vh) scaleY(1.1) scaleX(-1.1)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
            <Image
              src="/Assets/020.webp"
              alt="Segunda imagen de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible 
                  ? "translateY(24vh) translateX(16vw) scaleY(0.85) scaleX(0.85)" 
                  : "translateY(24vh) translateX(16vw) scaleY(0.8) scaleX(0.8)"
                : isVisible 
                  ? "translateY(14vh) translateX(-24vw) scaleY(0.35) scaleX(0.35)" 
                  : "translateY(14vh) translateX(-24vw) scaleY(0.3) scaleX(0.3)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
            <Image
              src="/Assets/002.webp"
              alt="Tercera imagen de Hero Banner"
              fill
              priority
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 15vw"
              style={{
                objectFit: "contain",
                transform: isMobile
                ? isVisible 
                  ? "translateY(-30vh) translateX(24vw) scaleY(0.65) scaleX(0.65)" 
                  : "translateY(-30vh) translateX(24vw) scaleY(0.6) scaleX(0.6)"
                : isVisible 
                  ? "translateY(-24vh) translateX(24vw) scaleY(0.35) scaleX(0.35)" 
                  : "translateY(-24vh) translateX(24vw) scaleY(0.3) scaleX(0.3)",
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
          </div>
        )}
        <button
          onClick={handleIncrement}
          className="z-10 text-white p-4 bg-black rounded-full hover:bg-gray-800 transition duration-200"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className={`w-3 h-3 rounded-full ${id === IdBanner ? "bg-gray-400" : "bg-white"
              } transition-colors duration-300`}
          />
        ))}
      </div>
      <style jsx>{`
  .animate-move-out-right {
    transform: translateX(100%);
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
  }
  .animate-move-out-left {
    transform: translateX(-100%);
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
  }
  .animate-move-in-right {
    transform: translateX(100%);
    opacity: 1;
    transition: opacity 1s ease, transform 1s ease;
  }
  .animate-move-in-left {
    transform: translateX(-100%);
    opacity: 1;
    transition: opacity 1s ease, transform 1s ease;
  }
  .animate-move-in {
    transform: translateX(0);
    opacity: 1;
    transition: opacity 1s ease, transform 1s ease;
  }
  .hidden {
    opacity: 0;
    transition: opacity 1s ease;
  }
`}</style>
    </section>

  );
};

export default HeroBanner;
