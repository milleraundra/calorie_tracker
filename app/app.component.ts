import { Component } from 'angular2/core';
import { SignInComponent } from './sign-in.component';
import { TrackerHomeComponent } from './tracker-home.component';
import { Food } from './food.model';
import { PageHeaderComponent } from './page-header.component';

@Component({
  selector: 'my-app',
  directives: [SignInComponent, TrackerHomeComponent, PageHeaderComponent],
  template: `
    <div class="container">
      <div class="page-header">
        <page-header [user]="currentUser"></page-header>
      </div>
      <sign-in
        *ngIf="!userExists"
        (userSignIn)="runSignIn($event)">
      </sign-in>
      <tracker-home
        *ngIf="userExists"
        [calorieCap]="calorieGoal"
        [foods]="foods">
      </tracker-home>

    </div>
  `
})

export class AppComponent {
  public userExists: boolean;
  public currentUser: string;
  public calorieGoal: number;
  public foods: Food[];
  constructor() {
    this.userExists = false;
    this.currentUser = undefined;
    this.calorieGoal = undefined;
  }

  runSignIn(userInfo: any[]): void {
    this.currentUser = userInfo[0];
    this.calorieGoal = userInfo[1];
    this.foods = [
      new Food("Salad", "lunch", 290, 0),
      new Food("Hamburger", "dinner", 380, 1),
      new Food("Granola & Yogurt", "snack", 180, 2)
    ]
    this.userExists = true;
  }

}
