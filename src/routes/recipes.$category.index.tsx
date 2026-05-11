import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/lib/recipes";

export const Route = createFileRoute("/recipes/$category/")({
  component: RecipeCategory,
});

function RecipeCategory() {
  const { category } = Route.useParams();
  const categoryRecipes = recipes[category] || [];

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/10 to-secondary/10">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 capitalize">
          {category?.split("-").join(" ")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryRecipes.map((recipe, index) => (
            <Link
              key={index}
              to="/recipes/$category/$recipeId"
              params={{ category, recipeId: String(index) }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Time: {recipe.cookTime}</p>
                  <h3 className="font-semibold mb-2">Ingredients:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {recipe.ingredients.slice(0, 4).map((ingredient, idx) => (
                      <li key={idx} className="text-gray-700">
                        {ingredient}
                      </li>
                    ))}
                    {recipe.ingredients.length > 4 && <li className="text-gray-700">...</li>}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
