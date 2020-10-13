import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from './interfaces';

@Pipe({
  name: 'userTransform'
})
export class UserTransformPipe implements PipeTransform {

  transform(value: IUser[]): string[] {
    return value.map(user => `Hello my name is ${user.name}, and my email is ${user.email}`);
  }

}
