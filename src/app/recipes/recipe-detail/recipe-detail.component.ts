import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServices } from 'src/app/services/recipe.services';
import { ShoppinglistServices } from 'src/app/services/shoppinglist.services';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetail: Recipe;

  constructor(
    private recipeServices: RecipeServices, 
    private SLService: ShoppinglistServices,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeDetail = this.recipeServices.getSelectedRecipe(params.id);
    });
  }

  moveToShoppingList(){
    this.SLService.moveToShoppingList(this.recipeDetail.Ingredients);
  }

  removeRecipe(){
    this.recipeServices.removeSelectedRecipe(this.route.snapshot.params['id']);
    
    this.router.navigate['recipes'];
  }
}
