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
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
    </div>
  </div>
  `
})

export class EditFoodComponent {

}
