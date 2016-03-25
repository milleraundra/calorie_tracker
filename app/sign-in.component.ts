import { Component, EventEmitter } from 'angular2/core';

@Component ({
  selector: 'sign-in',
  outputs: ['userSignIn'],
  template: `
    <h2>Welcome! Please enter your name and *daily calorie goal.</h2>
    <p>*Your daily calorie goal is the total number of calories you wish to consume in a day. Whether you're trying to lose, gain, or maintain your weight, this number will help keep you on track. Good luck!</p>
    <input type="text" placeholder="Your Name" #userName>
    <input type="number" placeholder="Calorie Goal" #calorieGoal>
    <button (click)="createUser(userName, calorieGoal)">Begin!</button>
  `
})

export class SignInComponent {
  // public userName: string;
  // public calorieGoal: number;
  public userSignIn: EventEmitter<any>;

  constructor() {
    this.userSignIn = new EventEmitter();
  }

  createUser(userName: HTMLInputElement, calories: HTMLInputElement) {
    this.userSignIn.emit([userName.value, calories.value])
  }


}
