import { Component } from 'angular2/core';

@Component ({
  selector: 'page-header',
  inputs: ['user'],
  template: `
    <div class="row">
      <div class="col-sm-9">
        <h1>Calorie Tracker</h1>
      </div>
      <div class="col-sm-3 user-info">
        <h5 *ngIf="user">User: {{ user }}</h5>
      </div>
    </div>

  `
})

export class PageHeaderComponent {

}
