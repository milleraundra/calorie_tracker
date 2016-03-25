import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div class="panel panel-default edit-field">
    <div class="panel-body">
      <input [(ngModel)]="food.name">
      <input [(ngModel)]="food.calories">
      <select [(ngModel)]="food.meal">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
    </div>
  </div>
  `
})

export class EditFoodComponent {

}
