import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prefixPipe' })

export class prefixPipe implements PipeTransform {
    transform(inName: string, inGender: string): string {
        switch (inGender) {
            case "Male":
                return "Mr." + inName;
            case "Female":
                return "Ms." + inName;
            default:
                return inName;
        }
    }
}