import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'new-food',
  outputs: ['newFoodItem'],
  template: `
    <div class="form-group">
      <input type="text" placeholder="Food" #food>
      <input type="number" placeholder="Calories Consumed" #calories>
      <select #meal>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <button (click)="addFood(food, meal, calories)">Add Food</button>
    </div>
  `
})

export class AddFoodComponent {
  public newFoodItem: EventEmitter<any>;

  constructor() {
    this.newFoodItem = new EventEmitter();
  }

  addFood(food: HTMLInputElement, meal: HTMLSelectElement, calories: HTMLInputElement): void {
    var caloriesInt: number;
    caloriesInt = parseInt(calories.value);
    this.newFoodItem.emit([food.value, meal.value, caloriesInt]);
    food.value = "";
    meal.value = "Breakfast";
    calories.value = "";
  }

}
