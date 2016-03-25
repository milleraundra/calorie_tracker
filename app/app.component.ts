import { Component } from 'angular2/core';
import { SignInComponent } from './sign-in.component';

@Component({
  selector: 'my-app',
  directives: [SignInComponent],
  template: `
    <div class="container">
      <div class="page-header">
        <h1>Calorie Tracker</h1>
      </div>
      <sign-in *ngIf="!userExists"(userSignIn)="runSignIn($event)"></sign-in>

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
