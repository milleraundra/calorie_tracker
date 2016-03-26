import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'calorie-count',
  inputs: ['user', 'calorieCap', 'calorieEaten', 'calorieRemain'],
  template: `
    <div>
      <h3>{{ user }}</h3>
      <h4>Calorie Cap: {{ calorieCap }}</h4>
      <h4>Calories Eaten: {{ calorieEaten }}</h4>
      <h4>Calories Remaining: {{ calorieRemain }}</h4>
    </div>

  `
})

export class CalorieCountComponent {

}

//<h4 #calorieRemain="remainCalories(foods)>Calories Remaining: {{ calorieRemain }}</h4>
