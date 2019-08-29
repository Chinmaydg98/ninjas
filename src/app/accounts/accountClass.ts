import { IAccount } from './IAccount';

export class account implements IAccount
{    
    public name : string;
    public gender : string;
    private balance : number;
    private address : string;

    constructor(inName: string, inGender: string, inBalance: number = 0, inAddress: string = "Not supplied"){
        this.name = inName;
        this.gender = inGender;
        this.balance = inBalance;
        this.address = inAddress;
    }
    
    printBalance(): number {
        return this.balance;
    }

    printAddress(): string{
        return this.address;
    }
    
    depositFunds(amount: number):void{
        this.balance = amount;
    }

    withdrawFunds(amount: number):boolean{
        if(this.balance>=amount){
            this.balance =- amount;
            return true;
        }
        else
            return false;
    }
}