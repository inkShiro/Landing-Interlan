import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.7 }
    );
    const element = document.getElementById('banner');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const images = [
    {
      src: "/Assets/011.webp",
      alt: "Primera imagen de Hero Banner",
      transform: isVisible
        ? isMobile
          ? "translateY(20vh) scaleY(0.9) scaleX(0.9)"
          : "translateY(2vh) scaleY(1) scaleX(1) translateX(16vh)"
        : isMobile
          ? "translateY(23vh) scaleY(0.8) scaleX(0.8)"
          : "translateY(6vh) scaleY(0.9) scaleX(0.9) translateX(16vh)",
      sizes: isMobile
        ? "(max-width: 768px) 100vw"
        : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      src: "/Assets/002.webp",
      alt: "Tercera imagen de Hero Banner",
      transform: isVisible
        ? isMobile
          ? "translateY(26vh) translateX(-14vw) scaleY(0.4) scaleX(0.4)"
          : "translateY(20vh) translateX(28vw) scaleY(0.2) scaleX(0.2)"
        : isMobile
          ? "translateY(26vh) translateX(-14vw) scaleY(0.45) scaleX(0.45)"
          : "translateY(20vh) translateX(28vw) scaleY(0.15) scaleX(0.15)",
      sizes: isMobile
        ? "(max-width: 768px) 90vw"
        : "(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 15vw",
    },
    {
      src: "/Assets/020.webp",
      alt: "Cuarta imagen de Hero Banner",
      transform: isVisible
        ? isMobile
          ? "translateY(-22vh) translateX(16vw) scaleY(0.55) scaleX(0.55)"
          : "translateY(6vh) translateX(-24vw) scaleY(0.34) scaleX(0.34)"
        : isMobile
          ? "translateY(-22vh) translateX(16vw) scaleY(0.5) scaleX(0.5)"
          : "translateY(6vh) translateX(-24vw) scaleY(0.3) scaleX(0.3)",
      sizes: isMobile
        ? "(max-width: 768px) 90vw"
        : "(max-width: 768px) 70vw, (max-width: 1200px) 35vw, 25vw",
    },
  ];


  return (
    <section
      id="banner"
      className="relative h-screen"
      style={{ backgroundColor: "#EFF6FF" }}
    >
      <div
        id="banner-container"
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage: "url(/Assets/mask02.png)",
          WebkitMaskImage: "url(/Assets/mask02.png)",
          maskSize: "cover",
          WebkitMaskSize: "cover",
        }}
      >
        <div
          id="banner-container"
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: "url(/Assets/mask01.png)",
            WebkitMaskImage: "url(/Assets/mask01.png)",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        >
          <div
            style={{
              backgroundImage: "url(/Assets/036.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#EFF6FF",
          width: "100%",
          height: "100%",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            id="mask-overlay"
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              maskImage: "url(/Assets/mask01.png)",
              WebkitMaskImage: "url(/Assets/mask01.png)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes={image.sizes}
              style={{
                objectFit: "contain",
                transform: image.transform,
                transition: "transform 1s ease-in-out",
              }}
              className="absolute inset-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
