
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHandlerComponent } from './user-handler/user-handler.component';

const routes: Routes = [
  {path: 'userhandler', component: UserHandlerComponent, loadChildren: () => import('./user-handler/user-handler.module').then(m => m.UserHandlerModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
