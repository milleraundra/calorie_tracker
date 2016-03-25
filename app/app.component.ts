import { Component } from 'angular2/core';
import { SignInComponent } from './sign-in.component';
import { TrackerHomeComponent } from './tracker-home.component';

@Component({
  selector: 'my-app',
  directives: [SignInComponent, TrackerHomeComponent],
  template: `
    <div class="container">
      <div class="page-header">
        <h1>Calorie Tracker</h1>
      </div>
      <sign-in
        *ngIf="!userExists"
        (userSignIn)="runSignIn($event)">
      </sign-in>
      <tracker-home
        *ngIf="userExists"
        [user]="currentUser"
        [calorieCap]="calorieGoal">
      </tracker-home>

    </div>
  `
})

export class AppComponent {
  userExists: boolean;
  currentUser: string;
  calorieGoal: number;
  construct() {
    this.userExists = false;
  }

  runSignIn(userInfo: any[]): void {
    this.currentUser = userInfo[0];
    this.calorieGoal = userInfo[1];
    this.userExists = true;
  }

}
