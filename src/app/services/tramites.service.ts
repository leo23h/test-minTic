import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tramite, TramiteInfo } from '../interfaces/tramite';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  constructor(private httpClient: HttpClient) {}

  getTramiteControl(): Observable<Tramite> {
    return this.httpClient.get(`https://api-interno.www.gov.co/api/ficha-tramites-y-servicios/secciones/los-mas-consultados-en-home`)
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

  getTramiteInfo(): Observable<TramiteInfo[]> {
    return this.httpClient.get(`https://api-interno.www.gov.co/api/ficha-tramites-y-servicios/LoMasConsultado/ObtenerLoMasConsultado`)
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
