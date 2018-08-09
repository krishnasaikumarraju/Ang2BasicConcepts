import { Component } from '@angular/core';

@Component({
  selector: 'rect-component',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public width = 10;
  public height = 20;

  getArea():number{
    return this.width*this.height;
  }
}
