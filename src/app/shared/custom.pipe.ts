import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform {
  transform(value: string) {
    return value.substr(0, 8);
  }
}
