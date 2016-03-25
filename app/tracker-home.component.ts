import { Component } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';

@Component ({
  selector: 'tracker-home',
  inputs: ['user', 'calorieCap', 'foods'],
  directives: [FoodDisplayComponent],
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
      </div>
    </div>

  `
})

export class TrackerHomeComponent {
  public foods: Food[];
  public selectedFood: Food;


  viewSelectedFood(clickedFood: Food) {
    this.selectedFood = clickedFood;
    console.log(this.selectedFood);
  }






}
