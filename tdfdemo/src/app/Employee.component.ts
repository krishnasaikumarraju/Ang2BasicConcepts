import {Component} from '@angular/core';

@Component({
  selector: 'app-emp',
  template: `<h2>This is my Employee Component</h2>
  <p>Name: {{name}}</p> <p>Age: {{age}}</p> <app-contactnfo [empname]="name"></app-contactnfo>
  <app-emp-skill></app-emp-skill>`,
})

export class EmployeeComponent {
    name: string = 'devi';
    age: number = 23;
}
