import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['singleFood'],
  outputs: ['foodToView'],
  template: `
    <h3 (click)="viewFood(singleFood)">{{ singleFood.name}}</h3>
  `
})

export class FoodDisplayComponent {
    public foodToView: EventEmitter<Food>;
    constructor() {
      this.foodToView = new EventEmitter();
    }

    viewFood(clickedFood: Food) {
      this.foodToView.emit(clickedFood);
    }
}
