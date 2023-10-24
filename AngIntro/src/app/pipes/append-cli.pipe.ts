import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCli'
})
export class AppendCliPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `City name CLI: ${value}`;
  }

}
