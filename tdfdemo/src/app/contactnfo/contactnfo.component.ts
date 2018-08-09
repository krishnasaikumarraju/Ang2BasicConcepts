import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contactnfo',
  templateUrl: './contactnfo.component.html',
  styleUrls: ['./contactnfo.component.css']
})
export class ContactnfoComponent implements OnInit {
  @Input('empname') ename:string;
  phone:number;
  email:any;

  constructor() { }

  ngOnInit() {
   this.phone=45454;
   this.email="prakash@gmail.com"
  //this.empname
  }

}
