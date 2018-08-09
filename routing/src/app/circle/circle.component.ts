import { Component } from '@angular/core';

@Component({
  selector: 'circle-component',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  radius = 10;

  getArea():number{
    return this.radius*this.radius*3.14;
  }
}
