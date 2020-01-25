import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let f of frutas" (click)="f.state=!f.state" [class.highlighted]="f.state" > {{f.fruta}} </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frutas = [
    { fruta: 'banana', state: false},
    { fruta: 'maca', state: false},
    { fruta: 'pera', state: false}
  ];
}
