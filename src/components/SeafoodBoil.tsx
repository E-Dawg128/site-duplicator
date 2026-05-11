import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const SeafoodBoil = () => {
  const seafoodImages = [
    "/lovable-uploads/1451211a-539e-4ce7-b0c3-718538daa707.png",
    "/lovable-uploads/5747d01e-56c6-433d-98b1-8a797513d7d5.png",
    "/lovable-uploads/062656fc-6848-4ee0-b3d1-1e75e0a14fbc.png",
    "/lovable-uploads/fa343a57-9423-44b1-9ef4-c529dfe3ca8e.png",
    "/lovable-uploads/2c132643-7f50-4f77-9885-eb749cac1724.png",
  ];


  return (
    <section id="seafood-boil" className="py-20 bg-white pb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Seafood Boil Experience
        </h2>
        <Card className="bg-white hover:shadow-xl transition-shadow duration-300 mb-16">
          <CardHeader>
            <div className="flex justify-center mb-6">
              <Fish className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-xl text-center mb-4">
              A Unique Culinary Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 mb-10">
              Rave Bae Eats is known for high quality seafood boil experience that
              is one of a kind. Chose from five delicious flavors, customize your
              boil and have an event that'll have your friends raving for weeks to
              come!
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full max-w-3xl mx-auto"
            >
              <CarouselContent>
                {seafoodImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`Seafood boil presentation ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-x-visible md:pb-0 md:mx-0">
          <div className="grid grid-flow-col auto-cols-[85%] md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-8 md:auto-cols-auto">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Martinez</CardTitle>
                    <p className="text-sm text-muted-foreground">Miami, FL</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-primary mb-3">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 italic">
                  "The seafood boil was absolutely incredible! The flavors were perfect and the quality was top-notch. Rave Bae Eats made our family gathering unforgettable!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold text-lg">DJ</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">David Johnson</CardTitle>
                    <p className="text-sm text-muted-foreground">Fort Lauderdale, FL</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-primary mb-3">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 italic">
                  "Amazing catering service! The meal prep options are delicious and so convenient. Caroline's attention to detail and customer service is outstanding!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">KR</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kim Rodriguez</CardTitle>
                    <p className="text-sm text-muted-foreground">Broward County, FL</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-primary mb-3">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 italic">
                  "Rave Bae Eats transformed our corporate event! The food was exceptional and the presentation was beautiful. Highly recommend for any special occasion!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional spacing before contact form */}
        <div className="h-16"></div>
      </div>
    </section>
  );
};

export default SeafoodBoil;
