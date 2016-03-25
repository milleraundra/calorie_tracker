import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'calorie-count',
  inputs: ['foods', 'user'],
  template: `
    <div>
      <h3>Hello, World!</h3>
    </div>

  `
})

export class CalorieCountComponent {

}
