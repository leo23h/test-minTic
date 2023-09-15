import { Component, OnInit } from '@angular/core';
import { BannerInfo } from '../interfaces/bannerInfo';
import { BannerMain } from '../interfaces/bannerMain';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerControl!: BannerInfo;
  bannerData!: BannerMain

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.getBannerControl();
    this.getBannerInfo();
  }

  getBannerControl(){
    this.bannerService.getBannerControl().subscribe(
      (response: BannerInfo) =>{
        this.bannerControl = response;
      },
      (error: any)=>{
        console.log("error para obtener la informacion de banner control", error);
      }
    )
  }

  getBannerInfo(){
    this.bannerService.getBannerInfo().subscribe(
      (response: BannerMain) =>{
        this.bannerData = response;
      },
      (error: any)=>{
        console.log("error para obtener la informacion de banner data", error);
      }
    )
  }
  goToCategorias(){
    window.location.href= this.bannerData.urlBotonAuxiliar;
  }

}
