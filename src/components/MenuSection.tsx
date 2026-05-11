
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const menuImages = [
    {
      src: "/lovable-uploads/a9ad863f-71fb-4b03-bc68-13038dae48ee.png",
      alt: "Rave Bae Meal Prep Menu - Meats, Seafood & Sides",
      title: "Meal Prep Menu"
    },
    {
      src: "/lovable-uploads/d456f5ba-9909-4cdf-8e42-3cbe7cb2b00c.png", 
      alt: "Rave Bae Eats Catering Menu - Pastas, Trays & Appetizers",
      title: "Catering Menu"
    }
  ];

  const openModal = (index: number) => {
    setActiveMenuIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextMenu = () => {
    setActiveMenuIndex((prev) => 
      prev === menuImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevMenu = () => {
    setActiveMenuIndex((prev) => 
      prev === 0 ? menuImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Our Menus
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our delicious meal prep and catering options. Click on any menu to view it in full screen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menuImages.map((menu, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => openModal(index)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={menu.src}
                      alt={menu.alt}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-foreground">Click to view full size</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center text-foreground">{menu.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            {/* Close button */}
            <Button
              onClick={closeModal}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation arrows */}
            <Button
              onClick={prevMenu}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={nextMenu}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Menu image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={menuImages[activeMenuIndex].src}
                alt={menuImages[activeMenuIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuSection;
