import { Component } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { FoodDetailsComponent } from './food-details.component';
import { Food } from './food.model';

@Component ({
  selector: 'tracker-home',
  inputs: ['user', 'calorieCap', 'foods'],
  directives: [FoodDisplayComponent, FoodDetailsComponent],
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

      <div class="col-sm-4 col-sm-offset-2">
        <h3>{{ user}}</h3>
        <h4>{{ calorieCap }}</h4>

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

  constructor() {
    this.selectedFood = undefined;
  }

  viewSelectedFood(clickedFood: Food) {
    this.selectedFood = clickedFood;
    console.log(this.selectedFood);
  }






}
