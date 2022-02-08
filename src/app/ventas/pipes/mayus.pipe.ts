import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayus',
})
export class MayusPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (args[0] == true) {
      return value;
    }
    return value.toUpperCase();
  }
}
