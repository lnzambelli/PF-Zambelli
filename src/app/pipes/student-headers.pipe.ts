import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentHeaders'
})
export class StudentHeadersPipe implements PipeTransform {

  transform(headerName: string): string {
    let nameReturn = ""

    switch (headerName) {
      case 'id':
        nameReturn='#'
        break;
      case 'name':
        nameReturn='nombre'
        break;
      case 'adminPermission':
        nameReturn='permiso'
        break;
      case 'actions':
        nameReturn='acciones'
        break;
      default:
        nameReturn = headerName
    }

    return nameReturn;
  }

}
