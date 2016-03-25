import { Component } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { FoodDetailsComponent } from './food-details.component';
import { Food } from './food.model';
import { AddFoodComponent } from './add-food.component';

@Component ({
  selector: 'tracker-home',
  inputs: ['calorieCap', 'foods'],
  directives: [FoodDisplayComponent, FoodDetailsComponent, AddFoodComponent],
  template: `
    <div class="row">
      <div class="col-sm-6">
        <food-display
        *ngFor="#food of foods"
        [singleFood]="food"
        (foodToView)="viewSelectedFood($event)"
        >
        </food-display>
      </div>

      <div class="col-sm-4">
        <button class="btn btn-lg btn-danger btn-block"
          (click)="toggleAddFoodField()"
          >
          Add Food</button>
          <new-food
            *ngIf="showAddFoodField"
            class="panel"
            (newFoodItem)="addNewFood($event)"
            >
            </new-food>
        <food-details
          *ngIf="selectedFood"
          [food]="selectedFood">
        </food-details>
      </div>
    </div>

  `
})

export class TrackerHomeComponent {
  public foods: Food[];
  public selectedFood: Food;
  public showAddFoodField: boolean;

  constructor() {
    this.selectedFood = undefined;
    this.showAddFoodField = false;
  }

  viewSelectedFood(clickedFood: Food) {
    this.selectedFood = clickedFood;
    console.log(this.selectedFood);
  }

  toggleAddFoodField() {
    this.showAddFoodField = !this.showAddFoodField;
    console.log(this.showAddFoodField);
  }

  addNewFood(newFoodArray: any[]) {
    this.foods.push(new Food(newFoodArray[0], newFoodArray[1], newFoodArray[2], this.foods.length));
  }






}
