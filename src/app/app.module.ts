import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortalComponent } from './components/portal/portal.component';
import { CotizasComponent } from './components/cotizas/cotizas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortalComponent,
    CotizasComponent,
    EstadisticasComponent,
    HoroscopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
