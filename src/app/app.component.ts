import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test-MinTic';
  responsiveOptions: any[];
  tramites!: any[];
  iconoDefault: string = '../assets/maletin_2.svg';
  currentPage: number = 6;
  currentPageAux: number = 0;
  tramiteCopy: any[] = [];


  constructor(){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.tramites = this.getTramites();
    this.paginaInicial();
  }

  paginaInicial() {
    if (this.tramites.length < 6) {
        //caso cuando la cantidad de elementos es menor que 6, mostrar solo hasta la longitud del array
        this.tramiteCopy = this.tramites.slice(0, this.tramites.length);
         this.currentPage =  this.tramites.length;

    } else {
        this.currentPage = 6;
        //caso cuando sea mayor solo mostrar las primeras 6 
        this.tramiteCopy = this.tramites.slice(0, this.currentPage);
    }
}

  anteriorPagina(){
    this.currentPageAux -= 6;
    if (this.currentPageAux > 6) {
      let pagMain = this.currentPageAux;
      this.tramiteCopy = this.tramites.slice((pagMain - 6), this.currentPageAux);
      this.currentPage = this.currentPageAux;
    } else {
      this.tramiteCopy = this.tramites.slice(0, this.currentPageAux);
        this.currentPage = this.currentPageAux;
    }
  }

  siguientePagina(){
    this.currentPage += 6;
    this.currentPageAux = this.currentPage;
    //si la pagina actual es menor al total de elementos
    if (this.currentPage < this.tramites.length) {
        let pagMain = this.currentPage;
        this.tramiteCopy  = this.tramites.slice((pagMain - 6), this.currentPage);
    } else {
      this.tramiteCopy  = this.tramites.slice((this.currentPage - 6), this.tramites.length);
        this.currentPage = this.tramites.length;
    }
  }
  
  getTramites(){
    return [
      {
        "id": "76859",
        "nombre": "Consulta Registro \u00DAnico Tributario (RUT)",
        "iconoCategoria": "https://www.gov.co/uploads/d582224e-7514-44d5-b428-1f464982f184.svg"
      },
      {
        "id": "5870",
        "nombre": "Actualizaci\u00F3n del Registro \u00DAnico Tributario (RUT)",
        "iconoCategoria": ""
      },
      {
        "id": "345",
        "nombre": "Convalidaci\u00F3n de t\u00EDtulos de estudios de pregrado otorgados en el exterior",
        "iconoCategoria": "https://www.gov.co/uploads/3684b730-24b6-4cce-a608-7e4f583302a5.svg"
      },
      {
        "id": "366",
        "nombre": "Convalidaci\u00F3n de t\u00EDtulos de estudios de posgrado obtenidos en el exterior",
        "iconoCategoria": "https://www.gov.co/uploads/3684b730-24b6-4cce-a608-7e4f583302a5.svg"
      },
      {
        "id": "83105",
        "nombre": "Consulta en l\u00EDnea del estado de vinculaci\u00F3n a la estrategia UNIDOS.",
        "iconoCategoria": ""
      },
      {
        "id": "80167",
        "nombre": "C\u00E9dula de ciudadan\u00EDa digital",
        "iconoCategoria": "https://govco-prod-webutils.s3.amazonaws.com/uploads/2022-09-20/1962a9cb-641d-4ad9-a264-2c94712c8cc0-NECESI~1.SVG"
      },
      {
        "id": "9365",
        "nombre": "Certificaci\u00F3n de autoreconocimiento como miembro de la comunidad Negra, Afrocolombiana, Raizal y Palenquera y/o Oficio de solicitud de cupo y/o descuento educativo.",
        "iconoCategoria": ""
      },
      {
        "id": "7760",
        "nombre": "Certificado de aportes parafiscales",
        "iconoCategoria": "https://govco-prod-webutils.s3.amazonaws.com/uploads/2022-09-20/1962a9cb-641d-4ad9-a264-2c94712c8cc0-NECESI~1.SVG"
      },
      {
        "id": "589",
        "nombre": "Denuncia y/o queja por posible(s) infracci\u00F3n(es) a las normas de protecci\u00F3n al consumidor",
        "iconoCategoria": "https://www.gov.co/uploads/fb78fc0d-9aa0-4b11-b1b2-2f82ea4f6c43.svg"
      },
      {
        "id": "1025",
        "nombre": "Registro sanitario o renovaci\u00F3n de medicamentos importados incluidos en normas farmacol\u00F3gicas colombianas",
        "iconoCategoria": "https://www.gov.co/uploads/9d4af2e2-dbf1-4113-a463-0decc05c1b4b.svg"
      },
      {
        "id": "928",
        "nombre": "Registro sanitario de medicamentos de fabricaci\u00F3n nacional nuevos y/o renovaciones  incluidos en normas farmacol\u00F3gicas colombianas",
        "iconoCategoria": ""
      },
      {
        "id": "11345",
        "nombre": "Licencia para prestaci\u00F3n de servicios en seguridad y salud en el trabajo",
        "iconoCategoria": ""
      },
      {
        "id": "11345",
        "nombre": "Licencia para prestaci\u00F3n de servicios en seguridad y salud en el trabajo",
        "iconoCategoria": ""
      },
      {
        "id": "589",
        "nombre": "Denuncia y/o queja por posible(s) infracci\u00F3n(es) a las normas de protecci\u00F3n al consumidor",
        "iconoCategoria": "https://www.gov.co/uploads/fb78fc0d-9aa0-4b11-b1b2-2f82ea4f6c43.svg"
      },
      {
        "id": "1025",
        "nombre": "Registro sanitario o renovaci\u00F3n de medicamentos importados incluidos en normas farmacol\u00F3gicas colombianas",
        "iconoCategoria": "https://www.gov.co/uploads/9d4af2e2-dbf1-4113-a463-0decc05c1b4b.svg"
      },
    
    ]
  }
}
