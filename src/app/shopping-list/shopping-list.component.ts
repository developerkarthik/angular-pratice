import { Component, OnInit } from '@angular/core';
import { ShoppinglistServices } from '../services/shoppinglist.services';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  IngredientList: Ingredients[];
  IngList: Ingredients;

  constructor(private SLServices: ShoppinglistServices) { }

  ngOnInit(): void {
    this.IngredientList = this.SLServices.getIngredients();
    this.SLServices.IngredientSaved.subscribe(
      (Ingredients: Ingredients[]) => {
        console.log(Ingredients);
        this.IngredientList = Ingredients;
      }
    );
  }

  saveIngredients(IngValue: Ingredients){
    this.SLServices.saveIngredients(IngValue);
  }
}
