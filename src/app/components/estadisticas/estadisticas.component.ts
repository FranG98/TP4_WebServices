import { Component, OnInit } from '@angular/core';
import { Estadistica } from 'src/app/models/estadistica';
import { EstadisticaService } from 'src/app/services/estadistica.service';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  
  img: string;
  aux: string;
  todoMundo: boolean = false;
  tablaCompleta: boolean = true;
  paisSelect: string = "Todo el Mundo";
  pais: Array<Estadistica>;
  paisesS: Array<Estadistica>;
  resultados1: Array<any>;
  resultados2: Array<any>;
  paises: Array<string> = ['Argentina','USA','Spain','Italy','Germany','China','UK'];
  constructor(private statService: EstadisticaService) { 
    this.paisesS = new Array<Estadistica>();
    this.pais = new Array<any>();
    this.obtenerDatosTotales();
    this.obtenerDatosPais();
    
  }
  ngOnInit(): void {
  }

  obtenerDatosTotales(){
    this.statService.listarCasosMundiales().subscribe(
      (result)=>{
        this.resultados2 = result;
        
        this.paisesS[0] = this.resultados2[0];
        
      }
    )
  }

  obtenerDatosPais(){
    var j: number = 0;
    var k: number = 0;
    var m: number = 1;
    var ok: boolean = false;
    this.statService.listarCasos().subscribe(
        (result)=>{
         
         this.resultados1 = result['result'];
         
          for(j=0; j <= this.paises.length-1; j++){
            for(k=0;k <= this.resultados1.length-1;k++){    
              
              if(this.paises[j] == this.resultados1[k].country){
               
                ok = true;
                this.paisesS[m] = this.resultados1[k];
                
              if(ok == true){
                ok = false;
                m++;
                }
              }
            }
          } 
        }
     )
  }

  cambiar(){
    this.tablaCompleta = false;
    this.aux = this.paisSelect;
   
    if(this.paisSelect == "Todo el Mundo"){
      this.todoMundo = true;
      
    }else{
      if(this.paisSelect == "Argentina"){
        this.pais[0] = this.paisesS[1];
        this.img = "../../../assets/media/arg2.jpg";
      }
      if(this.paisSelect == "Estados Unidos"){
        this.pais[0] = this.paisesS[2];
        this.img = "../../../assets/media/usa2.jpg";
      }
      if(this.paisSelect == "España"){
        this.pais[0] = this.paisesS[3];
        this.img = "../../../assets/media/esp.jpg";
      }
      if(this.paisSelect == "Italia"){
        this.pais[0] = this.paisesS[4];
        this.img = "../../../assets/media/ita.jpg";
      }
      if(this.paisSelect == "Alemania"){
        this.pais[0] = this.paisesS[5];
        this.img = "../../../assets/media/ale.jpg";
      }
      if(this.paisSelect == "China"){
        this.pais[0] = this.paisesS[6];
        this.img = "../../../assets/media/chaina.jpg";
      }
      if(this.paisSelect == "Reino Unido"){
        this.pais[0] = this.paisesS[7];
        this.img = "../../../assets/media/gbr2.jpg";
      }
    }
  }

  resetear(){
    this.tablaCompleta = true;
    this.todoMundo = false;
  }

  eleccion(aux: string){
    
    this.paisSelect = aux;
  }
}
