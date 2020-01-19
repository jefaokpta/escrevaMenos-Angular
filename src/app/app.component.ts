import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-javacropt';

  frutas =
    [
      { fruta: 'banana', state: false},
      { fruta: 'maca', state: false},
      { fruta: 'pera', state: false}
    ];

  click(fruta) {
    fruta.state = !fruta.state;
  }
}
