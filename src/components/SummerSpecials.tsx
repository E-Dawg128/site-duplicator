import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SummerSpecials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const specialImages = [
    "/lovable-uploads/962276b9-1c05-433e-a016-83ed34123659.png",
    "/lovable-uploads/20d368c9-19ac-4840-9894-6365c57e8d82.png",
    "/lovable-uploads/15f396cf-ac2b-426f-896d-d193bc7e26e4.png",
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === specialImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [specialImages.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? specialImages.length - 1 : prevIndex - 1
    );
  }, [specialImages.length]);

  useEffect(() => {
    // Change slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div id="summer-specials" className="py-16 px-4" style={{ backgroundColor: '#fae7b6', boxShadow: 'none' }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Summer Specials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our amazing summer offers and catering packages
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-primary/20 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-primary/20 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="relative overflow-hidden rounded-lg shadow-xl" style={{ backgroundColor: '#fae7b6', boxShadow: 'none' }}>
            {specialImages.map((image, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Summer Special ${index + 1}`}
                  className="w-full h-auto max-h-[600px] object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {specialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerSpecials;