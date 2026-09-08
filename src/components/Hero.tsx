
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const carouselImages = [
    "/lovable-uploads/e8435b00-ae15-4205-9e01-4c68ab39b289.png",
    "/lovable-uploads/029910bf-1d32-4c22-bc8e-08dce04d9faf.png",
    "/lovable-uploads/6898f6e0-8345-4737-a26f-a1f3e626d07d.png",
    "/lovable-uploads/213e9817-4765-431a-9f26-3d5faea35fc3.png",
    "/lovable-uploads/5ca06b8c-e70c-4a7f-9377-771d5084a1c6.png",
    "/lovable-uploads/31134e34-3061-48bb-9893-da5b729844ed.png",
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselImages.length]);

  useEffect(() => {
    // Change slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Show arrow after 2 seconds
    const arrowTimeout = setTimeout(() => {
      setShowArrow(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(arrowTimeout);
    };
  }, [nextSlide]);


  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className="w-24 h-24 mb-8 rounded-full overflow-hidden border-4 border-primary shadow-xl">
          <img 
            src="/lovable-uploads/273e3b35-6f11-4d79-852b-e810cfda16b5.png"
            alt="Rave Bae Eats Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
          Delicious &{" "}
          <span className="text-primary">Nutritious</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in text-white">
          Experience gourmet meal prep and unforgettable catering services
        </p>
        <div className="space-x-4 animate-slide-up">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Menu
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Hero;
