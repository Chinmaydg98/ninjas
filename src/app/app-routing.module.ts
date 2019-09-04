import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { NinjasComponent } from './ninjas/ninjas.component';
import { RegisterUserComponent } from './register-user/register-user.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

var routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: "accounts", component: AccountsComponent },
  { path: "ninjas", component: NinjasComponent },
  { path: "register-user", component: RegisterUserComponent },
  { path: "reactive-form", component: ReactiveFormComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
