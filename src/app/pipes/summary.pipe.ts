import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length: number = 20): string {
    if (value.length >= length) return value;
    return value.substring(0, length);
  }

}
