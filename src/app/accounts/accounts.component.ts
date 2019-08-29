import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'
import { account } from './accountClass';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  
  aList : account[];

  sGender: string;

  onSelect(value:any){
    console.log(value);
    this.sGender = value;
  }

  constructor(private accountService : AccountService) {
  }
  getAccounts() {
    this.aList = this.accountService.getAccountList();
  }
  ngOnInit() {
    this.getAccounts();
  }
}
