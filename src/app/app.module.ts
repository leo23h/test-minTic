import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TramitesComponent } from './tramites/tramites.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/carousel';
import { IndexOfPipe } from './indexPipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TramitesComponent,
    ActualidadComponent,
    HomeComponent,
    IndexOfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
