import { Component, EventEmitter } from 'angular2/core';

@Component ({
  selector: 'food-details',
  inputs: ['food'],
  template: `
    <h3>{{ food.name }}</h3>
    <p>{{ food.meal }}</p>
    <p>{{ food.calories }}</p>
  `
})

export class FoodDetailsComponent {

}
