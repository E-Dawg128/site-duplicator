import { Utensils, Users, ChefHat } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Utensils className="w-12 h-12 text-primary" />,
      title: "Meal Prep",
      description:
        "Fresh food, never frozen. Rave Bae Prep offers customizable meals to fit your diet and help you conquer your weight loss goals.",
      image: "/lovable-uploads/d470445a-2cf7-47b5-834e-1b8da15a790a.png",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Catering",
      description:
        "Let us cater your next event with delicious, fresh food that will leave your guests talking about it for years to come.",
      image: "/lovable-uploads/f25a65f2-6702-4781-8007-470ba321327a.png",
    },
    {
      icon: <ChefHat className="w-12 h-12 text-primary" />,
      title: "Private Events",
      description:
        "Experience personalized chef services for intimate gatherings and special occasions.",
      image: "/lovable-uploads/f5a551e1-e5fa-4834-9f9b-b5472b9166be.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <CardHeader>
                <div className="flex justify-center mb-6">{service.icon}</div>
                <CardTitle className="text-xl text-center mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                {service.image && (
                  <div className="relative aspect-square overflow-hidden rounded-lg mt-auto">
                    <img
                      src={service.image}
                      alt={`${service.title} example`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;