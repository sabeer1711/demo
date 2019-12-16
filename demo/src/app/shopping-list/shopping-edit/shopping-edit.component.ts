import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Incredient } from 'src/app/shared/incredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:true}) nameInputRef:ElementRef ;
  @ViewChild('amountInput',{static:true}) amountInputRef:ElementRef ;
 @Output() IncredientAdded = new EventEmitter<Incredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newIngredient = new Incredient(ingName, ingAmount);
    
    this.IncredientAdded.emit(newIngredient)
  }
}
