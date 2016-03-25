import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { EditFoodComponent } from './edit-food.component';
@Component ({
  selector: 'food-details',
  inputs: ['food'],
  outputs: ['closeDetails'],
  directives: [EditFoodComponent],
  template: `
        <div class="panel panel-default edit-field">
          <div class="panel-heading">
            <button
              class="btn btn-small btn-default close"
              (click)="closeDetailsField()">
            X</button>
            <h3>{{ food.name }}</h3>
          </div>

          <div class="panel-body">
            <p>Meal: {{ food.meal }}</p>
            <p>Calories: {{ food.calories }}</p>
            <button
            *ngIf = "!viewEditField"
            class="btn btn-warning"
            (click)="editFood()">Edit</button>

            <button
            *ngIf = "viewEditField"
            class="btn btn-info"
            (click)="editFood()">Done Editing</button>

            <edit-food
            *ngIf="viewEditField"
            [food]= "food"></edit-food>
          </div>
        </div>

  `
})

export class FoodDetailsComponent {
  public viewEditField: boolean;
  public closeDetails: EventEmitter<any>;
  constructor() {
    this.viewEditField = false;
    this.closeDetails = new EventEmitter();
  }
  editFood() {
    this.viewEditField = !this.viewEditField;
  }
  closeDetailsField() {
    this.closeDetails.emit(1);
  }


}
