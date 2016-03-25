import { Component, EventEmitter } from 'angular2/core';

@Component ({
  selector: 'food-details',
  inputs: ['food'],
  template: `
    <h3>{{ food.name }}</h3>
    <p>Meal: {{ food.meal }}</p>
    <p>Calories: {{ food.calories }}</p>
  `
})

export class FoodDetailsComponent {

}
