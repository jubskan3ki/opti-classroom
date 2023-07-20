// components/Swiper.tsx
import React, { useRef, useState } from "react";

interface SwiperProps {
  children: React.ReactNode[];
}

const Swiper: React.FC<SwiperProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchEndX.current - touchStartX.current > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    if (touchStartX.current - touchEndX.current > 100 && currentSlide < children.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      style={{
        overflow: "hidden",
        display: "flex",
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: "transform 0.3s ease-in-out",
        width: `${children.length * 100}%`,
      }}
    >
      {children.map((child, index) => (
        <div key={index} style={{ flex: 1 }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Swiper;