import { Component } from '@angular/core';
import  {SalutePipe,agetransform} from './SalutePipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname="Divya";
  mydob = new Date();
  myage = 25;
  mysalary = 40000
  preformat = 'MMM-dd-yyyy';

  currentOrderField ='name';
  changeSortOrder(o:string){
    if(o=='I')
      this.currentOrderField="id";
    if(o=='A')
      this.currentOrderField="age";
    if(o=='N')
      this.currentOrderField="name";
  }
  emps = [
{id:100, name:'divya', age:25},
{id:101, name:'kamal', age:26},
{id:102, name:'devi', age:23},
{id:103, name:'lavanya', age:23},
]
  prices:number[] = [1000, 200, 4000];
}
