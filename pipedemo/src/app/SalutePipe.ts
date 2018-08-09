import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'salute'
})

export  class SalutePipe implements PipeTransform {
  transform(value): string {
    return 'Mr.' + value;
  }
}
@Pipe({
  name: 'agetr'
})
export  class agetransform implements PipeTransform{
  transform(value): string{
    if(value >= 25)
      return "old"
    else
      return "new"
  }
}
