import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NinjasComponent } from './ninjas/ninjas.component';
import { AccountsComponent } from './accounts/accounts.component';
import { prefixPipe } from './accounts/prefix.pipe';
import { filterPipe } from './accounts/filter.pipe';
import { ServerComComponent } from './server-com/server-com.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NinjasComponent,
    AccountsComponent,
    prefixPipe,
    filterPipe,
    ServerComComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
