import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/login' },
  { path: 'login', component: UsersComponent },
  { path: 'users', component: ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
