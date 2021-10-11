import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  IngredientList: Ingredients[] = [
    new Ingredients('Apples', 3),
    new Ingredients('Orange', 5)
  ]; 
  IngList: Ingredients;

  constructor() { }

  ngOnInit(): void {
  }

  saveIngredients(IngValue: Ingredients){
    this.IngredientList.push(IngValue);
  }
}
