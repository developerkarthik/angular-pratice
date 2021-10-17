import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameValue') nameValue: ElementRef;
  // @ViewChild('amountValue') amountValue: ElementRef;
  @Output() saveIngredient = new EventEmitter<Ingredients>();
  Ing: Ingredients;
  SLForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.SLForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'amount' : new FormControl(null, Validators.required)
    });
  }

  onIngredientSave(){
    // this.Ing = new Ingredients(
    //   this.nameValue.nativeElement.value, 
    //   this.amountValue.nativeElement.value);
    
    //this.saveIngredient.emit(this.Ing);
    console.log(this.SLForm);
  }
}
