export interface RecipeStep {
    step: number,
    description: string
}

export interface Ingredient {
    name: string,
    quantity: number,
    units: string
}

export interface Recipe {
    title: string,
    description: string,
    prepTimeMin: number,
    cookTimeMin: number,
    instructions: RecipeStep[],
    ingredients: Ingredient[],
}