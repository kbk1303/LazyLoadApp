import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSeriesHandlerRoutingModule } from './time-series-handler-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    TimeSeriesHandlerRoutingModule
  ]
})
export class TimeSeriesHandlerModule { }
