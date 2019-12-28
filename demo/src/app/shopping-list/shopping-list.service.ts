import { Incredient } from "../shared/incredient.module";
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Incredient[]>();
 private   ingredients: Incredient[]  =[
        new Incredient('Apple',50),
        new Incredient("orange",50)
      ]; 
      
      getIngredients(){
         return this.ingredients.slice();
      }
      addIncredient(incredient:Incredient){
          this.ingredients.push(incredient);    
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIncredients(ingredients:Incredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
      }

}