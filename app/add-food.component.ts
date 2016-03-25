import { Component } from 'angular2/core';

@Component({
  selector: 'new-food',
  template: `
    <div class="form-group">
      <input type="text" placeholder="Food">
      <input type="number" placeholder="Calories Consumed">
      <select>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <button>Add Food</button>
    </div>
  `
})

export class AddFoodComponent {

}
