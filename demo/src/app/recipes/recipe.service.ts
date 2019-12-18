import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Incredient } from '../shared/incredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'This is simply a test', 
         'https://img.taste.com.au/4tHdnA9H/taste/2019/02/sweet-spiced-roast-pumpkin-and-brown-rice-salad-recipesides_05-146829-2.jpg',
         [
             new Incredient('samosa',5),
             new Incredient("mango",5)

         ]),
        new Recipe('Another Test Recipe',
         'This is simply a test'
         , 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/07/carrot_biryani.jpg',
         [
             new Incredient('sanwich',22),
             new Incredient('biscuit',5)
         ])
      ];
    getRecipes(){
        return this.recipes.slice();
    }
    constructor(private slService:ShoppingListService){}
    addIncredientsToShoppingList(incredients:Incredient[]){
        this.slService.addIncredients(incredients)
    }

}