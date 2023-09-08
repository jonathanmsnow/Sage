import { Recipe } from "../constants/types";

export const BackendService = {
    retrieveRecipes(): Recipe[] {
        const recipes: Recipe[] = [
            {
                title: "Recipe 1",
                description: "This is one of my favorite recipes",
                prepTimeMin: 15,
                cookTimeMin: 30,
                instructions: [{
                    step: 1,
                    description: "Step 1 info"
                }],
                ingredients: [
                    {
                        name: "Ingredient 1",
                        quantity: 2,
                        units: "tablespoons"
                    }
                ]
            },
            {
                title: "Recipe 2",
                description: "This is my second favorite recipe",
                prepTimeMin: 15,
                cookTimeMin: 20,
                instructions: [{
                    step: 1,
                    description: "Step 1 info"
                }],
                ingredients: [
                    {
                        name: "Ingredient 1",
                        quantity: 2,
                        units: "tablespoons"
                    }
                ]
            }
        ]
        return recipes;
    }
};

