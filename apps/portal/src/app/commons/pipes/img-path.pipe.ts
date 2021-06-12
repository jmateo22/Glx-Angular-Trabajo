import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'apps/portal/src/environments/environment';


@Pipe({
  name: 'imgPath'
})
export class ImgPathPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const defaultimage = args[0];
    return value ? `${value}` : `${environment.imgPath}${defaultimage}`;
  }


}
