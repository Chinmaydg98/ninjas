import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NinjasComponent } from './ninjas/ninjas.component';
import { AccountsComponent } from './accounts/accounts.component';
import { prefixPipe } from './accounts/prefix.pipe';
import { filterPipe } from './accounts/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NinjasComponent,
    AccountsComponent,
    prefixPipe,
    filterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
