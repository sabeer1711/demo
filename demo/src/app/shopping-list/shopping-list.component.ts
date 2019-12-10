import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.module';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Incredient[]  =[
    new Incredient('Apple',50),
    new Incredient("orange",50)
  ]; 
  
  constructor() {
   
   }

  ngOnInit() {
  }

}
