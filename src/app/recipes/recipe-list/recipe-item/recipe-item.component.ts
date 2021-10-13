import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServices } from 'src/app/services/recipe.services';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  
  constructor(
    private recipeServices: RecipeServices, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe){
    //this.recipeServices.onSelectedRecipe.emit(recipe);
    //this.recipeServices.getSelectedRecipe();
    this.router.navigate(['recipes', 0])
  }

}
