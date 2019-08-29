export interface IAccount{
    depositFunds(amount:number):void;
    withdrawFunds(amount:number):boolean;
    printBalance():number;
}