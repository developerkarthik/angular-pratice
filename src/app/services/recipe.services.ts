import { EventEmitter, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipes/recipe.model";
import { Ingredients } from "../shared/ingredients.model";

@Injectable()
export class RecipeServices{

    onSelectedRecipe = new EventEmitter<Recipe>();
    recipeLists = new EventEmitter<Recipe>();

    recipeList: Recipe[] = [
        new Recipe(
                'Test 1', 
                'Test Desc 1', 
                'https://sugargeekshow.com/wp-content/uploads/2020/06/moist_vanilla_cake_recipe_featured2.jpg',
                [
                    new Ingredients('Tomatto', 5),
                    new Ingredients('Onion', 4)
                ]
            ),
        new Recipe(
                'Test 2', 
                'Test Desc 2', 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4byZ7h7ilJdtxG8Kx4E2dZ-mEWKYTNDNjjw&usqp=CAU',
                [
                    new Ingredients('Tomatto', 20),
                    new Ingredients('Onion', 10)
                ]
            )
    ];

    constructor(private route: ActivatedRoute, private router: Router){}

    getRecipeList(){
        return this.recipeList.slice();
    }

    getSelectedRecipe(id : number){
        return this.recipeList[id];
    }

    removeSelectedRecipe(id : number){
        this.recipeList.splice(id, 1);
    }
}