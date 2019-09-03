import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../accounts/accountClass';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {

  genders = ['Male', 'Female'];

  model = new account("Akshay", this.genders[0], 5000);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
