import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from "./interfaces";

@Pipe({
  name: 'userTransf'
})
export class UserTransfPipe implements PipeTransform {

  transform(value: IUser[], ...args: unknown[]): string[] {
    return value.map(user => `My name is ${user.name} and my email ${user.email}`);
  }

}
