import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHandlerRoutingModule } from './user-handler-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHandlerComponent } from './user-handler.component';


@NgModule({
  declarations: [
    UserHandlerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    UserHandlerRoutingModule
  ],
  exports: [
    UserHandlerComponent, LoginComponent, RegisterComponent
  ]
})
export class UserHandlerModule { }
