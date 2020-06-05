import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PortalComponent } from './components/portal/portal.component';
import { CotizasComponent } from './components/cotizas/cotizas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

import { NoticiaService } from './services/noticia.service';
import { EstadisticaService } from './services/estadistica.service';
import { HoroscopoService } from './services/horoscopo.service';
import { CotizaService } from './services/cotiza.service';
const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'cotizas', component: CotizasComponent},
  {path: 'portal', component: PortalComponent},
  {path: 'horoscopo', component: HoroscopoComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NoticiaService, EstadisticaService, HoroscopoService, CotizaService],
})
export class AppRoutingModule { }
