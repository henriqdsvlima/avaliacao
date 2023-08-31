import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';

import { UserListComponent } from './components/shared/user-list/user-list.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    path: "users",
    component: UserListComponent
  },
  {

    path: 'user-page',
    component: UserPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
