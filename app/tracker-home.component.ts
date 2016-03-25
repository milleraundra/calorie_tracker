import { Component } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { FoodDetailsComponent } from './food-details.component';
import { Food } from './food.model';
import { AddFoodComponent } from './add-food.component';
import { HealthyFoodPipe } from './food.pipe';
import { MealPipe } from './meal.pipe';

@Component ({
  selector: 'tracker-home',
  inputs: ['calorieCap', 'foods'],
  directives: [FoodDisplayComponent, FoodDetailsComponent, AddFoodComponent],
  pipes: [HealthyFoodPipe, MealPipe],
  template: `
    <div class="row">
      <div class="col-sm-6">
        <select (change)="changeHealthFilter($event.target.value)">
          <option value="healthy">Healthy</option>
          <option value="unhealthy">Unhealthy</option>
          <option value="no-filter" selected="selected">No Filter</option>
        </select>

        <h3 class="display-section">Breakfast:</h3>
        <food-display
        *ngFor="#food of foods | meal:'breakfast' | healthy:healthFilter"
        [singleFood]="food"
        (foodToView)="viewSelectedFood($event)"
        >
        </food-display>

        <h3 class="display-section">Lunch:</h3>
        <food-display
        *ngFor="#food of foods | meal:'lunch' | healthy:healthFilter"
        [singleFood]="food"
        (foodToView)="viewSelectedFood($event)"
        >
        </food-display>

        <h3 class="display-section">Dinner:</h3>
        <food-display
        *ngFor="#food of foods | meal:'dinner' | healthy:healthFilter"
        [singleFood]="food"
        (foodToView)="viewSelectedFood($event)"
        >
        </food-display>

        <h3 class="display-section">Snacks:</h3>
        <food-display
        *ngFor="#food of foods | meal:'snacks' | healthy:healthFilter"
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
          (closeDetails)="clearSelectedFood()"
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
  public healthFilter: string;

  constructor() {
    this.selectedFood = undefined;
    this.showAddFoodField = false;
    this.healthFilter = "no-filter";
  }

  viewSelectedFood(clickedFood: Food) {
    this.selectedFood = clickedFood;
    console.log(this.selectedFood);
  }

  clearSelectedFood() {
    this.selectedFood = undefined;
  }

  toggleAddFoodField() {
    this.showAddFoodField = !this.showAddFoodField;
    console.log(this.showAddFoodField);
  }

  addNewFood(newFoodArray: any[]) {
    this.foods.push(new Food(newFoodArray[0], newFoodArray[1], newFoodArray[2], this.foods.length));
  }

  changeHealthFilter(newHealthFilter) {
    this.healthFilter = newHealthFilter;
    console.log(this.healthFilter);
  }


//  <p *ngIf="foods === []">No meals logged for today.</p>




}
