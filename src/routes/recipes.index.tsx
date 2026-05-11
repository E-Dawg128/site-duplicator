import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Drumstick, UtensilsCrossed } from "lucide-react";

const categories = [
  {
    name: "Chicken Dishes",
    path: "chicken-dishes",
    image:
      "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=1974&auto=format&fit=crop",
    icon: <Drumstick className="w-12 h-12 text-primary" />,
  },
  {
    name: "Seafood Dishes",
    path: "seafood-dishes",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    icon: <Fish className="w-12 h-12 text-primary" />,
  },
];

export const Route = createFileRoute("/recipes/")({
  component: Recipes,
  head: () => ({ meta: [{ title: "Recipes — Rave Bae Eats" }] }),
});

function Recipes() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/10 to-secondary/10">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-2">
            <UtensilsCrossed className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold text-center mb-12">Recipes</h1>
          </div>
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/recipes/$category"
              params={{ category: category.path }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-center text-secondary">
                    {category.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
