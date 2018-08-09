import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee.component';
import {SkillComponent} from './Skill.component';
import { ContactnfoComponent } from './contactnfo/contactnfo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SkillComponent,
    ContactnfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
