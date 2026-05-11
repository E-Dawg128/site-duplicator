export type Recipe = {
  name: string;
  cookTime: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

export const recipes: Record<string, Recipe[]> = {
  "chicken-dishes": [
    {
      name: "Lemon Garlic Pasta W/ Chicken Cutlets",
      cookTime: "25 minutes",
      image:
        "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?q=80&w=1925&auto=format&fit=crop",
      ingredients: [
        "Heavy Cream",
        "Shallot",
        "Garlic Cloves",
        "Fresh Lemon Juice",
        "Parsley",
        "Garlic Parmesan",
        "Garlic",
        "Red pepper flakes",
        "Onion powder",
        "Salt",
        "Chicken Cutlets",
        "Breadcrumb (season to your liking)",
        "Egg",
      ],
      instructions: [
        "Season chicken cutlets with salt, pepper, and your preferred seasonings",
        "Dip chicken in beaten egg, then coat with seasoned breadcrumbs",
        "Pan-fry chicken until golden brown and cooked through",
        "In a separate pan, sauté minced shallot and garlic until fragrant",
        "Add heavy cream and bring to a simmer",
        "Stir in fresh lemon juice, parmesan, and seasonings",
        "Toss with cooked pasta and chopped parsley",
        "Serve with sliced chicken cutlets on top",
      ],
    },
    {
      name: "Crispy Chicken Nuggets",
      cookTime: "30 minutes",
      image:
        "https://images.unsplash.com/photo-1696265498747-efc4c0dd7b98?q=80&w=1935&auto=format&fit=crop",
      ingredients: [
        "Chicken breast",
        "All-purpose flour",
        "Breadcrumbs",
        "Eggs",
        "Salt",
        "Black pepper",
        "Garlic powder",
        "Paprika",
        "Vegetable oil",
      ],
      instructions: [
        "Cut chicken breast into bite-sized pieces",
        "Season flour with salt, pepper, garlic powder, and paprika",
        "Set up breading station: seasoned flour, beaten eggs, and breadcrumbs",
        "Coat chicken pieces in flour, then egg, then breadcrumbs",
        "Heat vegetable oil in a large skillet over medium heat",
        "Fry nuggets in batches until golden brown and cooked through",
        "Drain on paper towels to remove excess oil",
        "Serve hot with your favorite dipping sauce",
      ],
    },
  ],
  "seafood-dishes": [
    {
      name: "Caper Butter Salmon",
      cookTime: "25 minutes",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
      ingredients: [
        "Butter",
        "Capers",
        "Garlic Paste",
        "Cilantro",
        "Parsley",
        "Chives",
        "Dill",
        "Lemon Juice",
      ],
      instructions: [
        "Pat salmon fillets dry and season with salt and pepper",
        "Heat butter in a large skillet until melted and bubbling",
        "Add salmon skin-side up and cook for 4 minutes",
        "Flip salmon and add capers, garlic paste, and herbs",
        "Baste salmon with the butter sauce",
        "Cook until salmon is done to your liking",
        "Finish with a squeeze of fresh lemon juice",
        "Garnish with additional fresh herbs",
      ],
    },
  ],
};
