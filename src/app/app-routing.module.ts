import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PictureListComponent} from './picture-list/picture-list.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', component: PictureListComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
