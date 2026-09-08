
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import weeklyMenu1Asset from "@/assets/9-14-26_menu_1.jpeg.asset.json";
import weeklyMenu2Asset from "@/assets/9-14-26_menu_2.jpeg.asset.json";

const MenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const menuImages = [
    {
      src: "/lovable-uploads/a9ad863f-71fb-4b03-bc68-13038dae48ee.png",
      alt: "Rave Bae Meal Prep Packages - Meats, Seafood & Sides",
      title: "Meal Prep Packages"
    },
    {
      src: "/lovable-uploads/d456f5ba-9909-4cdf-8e42-3cbe7cb2b00c.png", 
      alt: "Rave Bae Eats Catering Menu - Pastas, Trays & Appetizers",
      title: "Catering Menu"
    }
  ];

  const weeklyMenuImages = [
    {
      src: weeklyMenu1Asset.url,
      alt: "Rave Bae Weekly Menu 1 for Week of 9-13",
      title: "New Menus for the Week of 9-13 - Menu 1"
    },
    {
      src: weeklyMenu2Asset.url,
      alt: "Rave Bae Weekly Menu 2 for Week of 9-13",
      title: "New Menus for the Week of 9-13 - Menu 2"
    }
  ];

  const allMenuImages = [menuImages[0], ...weeklyMenuImages, menuImages[1]];

  const openModal = (index: number) => {
    setActiveMenuIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextMenu = () => {
    setActiveMenuIndex((prev) => 
      prev === allMenuImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevMenu = () => {
    setActiveMenuIndex((prev) => 
      prev === 0 ? allMenuImages.length - 1 : prev - 1
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
            {/* Meal Prep Menu */}
            <Card 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden md:flex md:flex-col"
              onClick={() => openModal(0)}
            >
              <CardContent className="p-0 md:flex-grow md:flex md:flex-col md:justify-center md:items-center">
                <div className="relative">
                  <img
                    src={menuImages[0].src}
                    alt={menuImages[0].alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-foreground">Click to view full size</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center text-foreground">{menuImages[0].title}</h3>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Special Menu */}
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 pb-4">
                  <h3 className="text-2xl font-bold text-center text-foreground mb-2">
                    New Menus for the Week of 9-13
                  </h3>
                  <p className="text-sm text-center text-muted-foreground">
                    Deliveries Monday - Wednesday. Pick a menu, mix or match, and contact us to order or to inquire about a custom menu.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 px-6 pb-6 md:w-1/2 mx-auto">
                  {weeklyMenuImages.map((menu, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group overflow-hidden rounded-lg"
                      onClick={() => openModal(index + 1)}
                    >
                      <img
                        src={menu.src}
                        alt={menu.alt}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-sm font-medium text-foreground">Click to view full size</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Catering Menu */}
            <Card 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => openModal(3)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={menuImages[1].src}
                    alt={menuImages[1].alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-foreground">Click to view full size</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center text-foreground">{menuImages[1].title}</h3>
                </div>
              </CardContent>
            </Card>
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
                src={allMenuImages[activeMenuIndex].src}
                alt={allMenuImages[activeMenuIndex].alt}
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
