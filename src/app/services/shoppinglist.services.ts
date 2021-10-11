import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppinglistServices{
    IngredientSaved = new EventEmitter<Ingredients[]>();

    IngredientList: Ingredients[] = [
        new Ingredients('Apples', 3),
        new Ingredients('Orange', 5)
    ];
    
    getIngredients(){
        return this.IngredientList.slice();
    }

    saveIngredients(Ing: Ingredients){
        this.IngredientList.push(Ing);
        this.IngredientSaved.emit(this.IngredientList);
    }
}