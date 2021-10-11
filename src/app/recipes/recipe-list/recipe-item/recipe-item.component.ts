import { Component, Input, OnInit, Output } from '@angular/core';
import { RecipeServices } from 'src/app/services/recipe.services';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  
  constructor(private recipeServices: RecipeServices) { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe){
    this.recipeServices.onSelectedRecipe.emit(recipe);
  }

}
