import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";

export class RecipeServices{

    onSelectedRecipe = new EventEmitter<Recipe>();
    
    recipeList: Recipe[] = [
        new Recipe('Test 1', 'Test Desc 1', 'https://sugargeekshow.com/wp-content/uploads/2020/06/moist_vanilla_cake_recipe_featured2.jpg'),
        new Recipe('Test 2', 'Test Desc 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4byZ7h7ilJdtxG8Kx4E2dZ-mEWKYTNDNjjw&usqp=CAU')
    ];

    getRecipeList(){
        return this.recipeList.slice();
    }
}