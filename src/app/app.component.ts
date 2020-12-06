import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome';

  className = "textRed";

  show() {

  }

  changeClass( event ) {
    console.log( event );
    this.className = "textGreen";
  }
}
