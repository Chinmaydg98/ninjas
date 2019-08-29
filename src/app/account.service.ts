import { Injectable } from '@angular/core';
import { account } from './accounts/accountClass';
import { accountList } from './accounts/accountList';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccountList(): account[] {
    return accountList
  }
}
