import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { recipes } from "@/lib/recipes";

export const Route = createFileRoute("/recipes/$category/$recipeId")({
  component: RecipeDetail,
});

function RecipeDetail() {
  const { category, recipeId } = Route.useParams();
  const recipe = recipes[category]?.[parseInt(recipeId || "0")];

  if (!recipe) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">Recipe not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/10 to-secondary/10">
      <Navbar />
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            {recipe.name}
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-4">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
