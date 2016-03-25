import { Component } from 'angular2/core';
import { SignInComponent } from './sign-in.component';

@Component({
  selector: 'my-app',
  directives: [ SignInComponent],
  template: `
    <div class="container">
      <sign-in></sign-in>

    </div>
  `
})

export class AppComponent {

}
