import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { NinjasComponent } from './ninjas/ninjas.component';
import { RegisterUserComponent } from './register-user/register-user.component'
import { DashboardComponent } from './dashboard/dashboard.component';

var routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: "accounts", component: AccountsComponent },
  { path: "ninjas", component: NinjasComponent },
  { path: "register-user", component: RegisterUserComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
