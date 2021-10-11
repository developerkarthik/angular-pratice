import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameValue') nameValue: ElementRef;
  @ViewChild('amountValue') amountValue: ElementRef;
  @Output() saveIngredient = new EventEmitter<Ingredients>();
  Ing: Ingredients;

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientSave(){
    this.Ing = new Ingredients(
      this.nameValue.nativeElement.value, 
      this.amountValue.nativeElement.value);
    
    this.saveIngredient.emit(this.Ing);
  }
}
