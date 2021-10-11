import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeServices } from 'src/app/services/recipe.services';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];
  
  constructor(private recipeSerivices: RecipeServices) { }

  ngOnInit(): void {
    this.recipeList = this.recipeSerivices.getRecipeList();
  }

}
