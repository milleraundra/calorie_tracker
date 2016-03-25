import { Component } from 'angular2/core';

@Component ({
  selector: 'tracker-home',
  inputs: ['user', 'calorieCap'],
  template: `
    <div class="row">
      <div class="col-sm-6">
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
        <p>Lorem ipsum dolor si amet</p>
      </div>

      <div class="col-sm-6">
      <h3>{{ user}}</h3>
      <h4>{{ calorieCap }}</h4>
      </div>
    </div>

  `
})

export class TrackerHomeComponent {
  public user: String;
  public calorieCap: Number;

  constructor() {
    console.log(this.user);
  }

}
