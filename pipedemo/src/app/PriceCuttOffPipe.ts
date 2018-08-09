import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutoff';
})
export class PriceCuttOffPipe implements PipeTransform{
  transform(x) {
  let resArr = x.filter(function (e) {
      if (e >= 10000) {
        return true;
      }
      else
        return false;
    });
    return resArr;
  }
}
