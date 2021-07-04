import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})

export class SortPipe implements PipeTransform {
  transform(value: any, prop: string): any {
    return value.sort((a, b) => {
      if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
        return 1;
      }
      return -1;
    });
  }
}
