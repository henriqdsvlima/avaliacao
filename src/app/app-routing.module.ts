import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

import { UserListComponent } from './components/pages/user-list/user-list.component';

import { AddUserComponent } from './components/pages/add-user/add-user.component';
import { UpdateUserComponent } from './components/pages/update-user/update-user.component';
import { ShowUserComponent } from './components/pages/show-user/show-user.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    path: "users",
    component: UserListComponent,
  },
  {
    path: "users/create",
    component: AddUserComponent
  },
  {
    path:'users/update/:id',
    component: UpdateUserComponent
  },
  {
    path:'users/user/:id',
    component: ShowUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
