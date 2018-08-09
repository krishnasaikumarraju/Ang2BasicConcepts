import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2OrderModule } from 'ng2-order-pipe';
import  {SalutePipe, agetransform} from './SalutePipe';
import {PriceCuttOffPipe} from './PriceCuttOffPipe'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SalutePipe,
    agetransform,
    PriceCuttOffPipe
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
