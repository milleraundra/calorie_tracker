import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
@Component ({
  selector: 'food-details',
  inputs: ['food'],
  template: `
    <h3>{{ food.name }}</h3>
    <p>Meal: {{ food.meal }}</p>
    <p>Calories: {{ food.calories }}</p>
    <button class="btn btn-warning"(click)="editFood(food)">Edit</button>


  `
})

export class FoodDetailsComponent {
  public viewEditField: boolean;
  constructor() {
    this.viewEditField = false;
  }
  editFood(food: Food) {
    this.viewEditField = !this.viewEditField;
  }
}
