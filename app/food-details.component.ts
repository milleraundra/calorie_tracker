import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { EditFoodComponent } from './edit-food.component';
@Component ({
  selector: 'food-details',
  inputs: ['food'],
  directives: [EditFoodComponent],
  template: `
    <h3>{{ food.name }}</h3>
    <p>Meal: {{ food.meal }}</p>
    <p>Calories: {{ food.calories }}</p>
    <button class="btn btn-warning"(click)="editFood()">Edit</button>

    <edit-food
      *ngIf="viewEditField"
      [food]= "food"></edit-food>
  `
})

export class FoodDetailsComponent {
  public viewEditField: boolean;
  constructor() {
    this.viewEditField = false;
  }
  editFood() {
    this.viewEditField = !this.viewEditField;
  }
}
