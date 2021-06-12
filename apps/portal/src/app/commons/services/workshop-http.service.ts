import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from '../interfaces/workshop.interface';


const statusErrorsMessage: Map<number, string> = new Map([
  [ 500, 'Ocurrio un error en el servidor' ],
  [ 404, 'No tiene los permisos nesesarios para ingresar' ],
]);

const statusCustomErrorsMessage: Map<number, string> = new Map([
  [ 5554, 'Falta parametros' ],
]);

@Injectable({
  providedIn: 'root'
})
export class WorkshopHttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Workshop[]>{
    return this.http.get<Workshop[]>('/workshops');
  }

  getOne(id: number): Observable<Workshop>{
    return this.http.get<Workshop>(`/workshops/${id}`);
  }


}
