import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from  '@angular/router';

import { AppComponent } from './app.component';
import {CircleComponent} from './circle/circle.component';
import {RectangleComponent} from './rectangle/rectangle.component';

@NgModule({
  declarations: [
    AppComponent,CircleComponent, RectangleComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path: 'circle', component: CircleComponent},
      {path: 'rect', component: RectangleComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
