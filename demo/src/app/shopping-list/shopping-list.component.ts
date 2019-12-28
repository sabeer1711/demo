import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.module';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Incredient[]; 
  constructor(private slService:ShoppingListService) {
   
   }

  ngOnInit() {
    this.ingredients =this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients:Incredient[]) => {
        this.ingredients = ingredients
      });
    
  }
 

}
