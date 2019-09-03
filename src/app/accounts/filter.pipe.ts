import { Pipe, PipeTransform } from '@angular/core';
import { account } from './accountClass';

@Pipe({ name: 'filterPipe' })

export class filterPipe implements PipeTransform {

    transform(inAccounts: account[], genderFilter: string): account[] {
        if (genderFilter === "onlyM")
            return inAccounts.filter(item=>item.gender=="Male");
        if (genderFilter === "onlyF")
            return inAccounts.filter(item=>item.gender=="Female");
        else
            return inAccounts;
    }
}