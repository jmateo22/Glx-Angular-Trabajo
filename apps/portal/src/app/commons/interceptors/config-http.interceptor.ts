import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'apps/portal/src/environments/environment';


const statusErrorsMessage: Map<number, string> = new Map([
  [ 500, 'Ocurrio un error en el servidor' ],
  [ 404, 'No tiene los permisos nesesarios para ingresar' ],
  [ 400, 'Formato de respuesta incorrecto' ],
]);

const statusCustomErrorsMessage: Map<number, string> = new Map([
  [ 5554, 'Falta parametros' ],
]);

@Injectable()
export class ConfigHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone(
      {url: `${environment.apiUrl}${request.url}`}
    );
    return next.handle(newRequest)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let message: string;

        if (err.error?.code) {
          message = statusCustomErrorsMessage.get(err.error.code);
          // message = err.error.message;
        } else {
          message = statusErrorsMessage.get(err.status) || 'Error Interno con el servidor';
        }

        if (message) {
          alert(err.error.status || message);
        }

        return throwError(err);
      })
    );
  }
}
