import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Actualidad, ActualidadInfo } from '../interfaces/actualidad';

@Injectable({
  providedIn: 'root'
})
export class ActualidadService {

  constructor(private httpClient: HttpClient) {}

  getActualidadControl(): Observable<Actualidad> {
    return this.httpClient.get(`https://api-interno.www.gov.co/api/noticias/secciones/actualidad-general`)
    .pipe(
      map((response: any) => {
        const data = response.data;
          return data;
      }),
      catchError((error)=>{
        return throwError(error);
      })
    )
  }

  getActualidadInfo(): Observable<ActualidadInfo[]> {
    return this.httpClient.get(`https://api-interno.www.gov.co/api/noticias/Noticias/categorias/0`)
    .pipe(
      map((response: any) => {
        const data = response.data;
          return data;
      }),
      catchError((error)=>{
        return throwError(error);
      })
    )
  }
}
