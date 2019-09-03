import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../accounts/accountClass';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  genders = ['Male', 'Female'];

  model = new account("Akshay", this.genders[0], 5000);

  submitted = false;

  accountList :  account[];

  constructor(private accountService : AccountService){}

  getAccounts(){
    this.accountList = this.accountService.getAccountList();
  }

  ngOnInit(){
    this.getAccounts();
  }

  onSubmit() {
    this.submitted = true;
    console.log("Reached onSubmit!");
  }

  addAccount(){
    console.log("Reached addAccount!");
  }

  //Delete diagnostic later
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
