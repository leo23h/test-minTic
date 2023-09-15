import { Injectable } from '@angular/core';
import { BannerInfo } from '../interfaces/bannerInfo';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BannerMain } from '../interfaces/bannerMain';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private httpClient: HttpClient) {}

  getBannerControl(): Observable<BannerInfo> {
    return this.httpClient.get(`https://api-interno.www.gov.co/api/home/BannerInformativo`)
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

  getBannerInfo(): Observable<BannerMain> {
    return this.httpClient.get(`https://api-interno.www.gov.co/api/home/BannerPrincipal`)
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
