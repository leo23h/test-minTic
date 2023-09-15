import { Component, OnInit } from '@angular/core';
import { ActualidadService } from '../services/actualidad.service';
import { Actualidad, ActualidadInfo } from '../interfaces/actualidad';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent implements OnInit {
  actualidadControl!: Actualidad;
  actualidadData!: ActualidadInfo[];

  constructor(private actualidadService: ActualidadService) { }

  ngOnInit(): void {
    this.getActualidadInfo();
    this.getActualidadData();
  }

  getActualidadInfo(){
    this.actualidadService.getActualidadControl().subscribe(
      (response: Actualidad) =>{
        this.actualidadControl = response;
      },
      (error: any)=>{
        console.log("error para obtener la informacion de actualidad Control", error);
      }
    )
  }

  getActualidadData(){
    this.actualidadService.getActualidadInfo().subscribe(
      (response: ActualidadInfo[]) =>{
        this.actualidadData = response;
      },
      (error: any)=>{
        console.log("error para obtener la informacion de actualidad data", error);
      }
    )
  }

}
