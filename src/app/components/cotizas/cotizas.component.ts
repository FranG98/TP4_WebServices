import { Component, OnInit } from '@angular/core';

import { CotizaService } from '../../services/cotiza.service';
import { Cotiza } from 'src/app/models/cotiza';
@Component({
  selector: 'app-cotizas',
  templateUrl: './cotizas.component.html',
  styleUrls: ['./cotizas.component.css']
})
export class CotizasComponent implements OnInit {

  moneda1: string = "USD";
  moneda2: string = "USD";
  valorInicial: number = 10;
  valorConvertido: Cotiza;
  valoresIniciales: Array<number>;
  valoresInit: Array<any>;
  
  constructor(private cotizaServicio: CotizaService) { 
    this.valorConvertido = new Cotiza();
    this.valorConvertido.result = "Dinero convertido...";
    this.valoresInit = new Array<any>();
    this.valoresIniciales = new Array<number>();
    this.listarConversiones();
  }

  ngOnInit(): void {
  }

  listarConversiones(){
    var j: number = 0;
    var i: number = 0;
    var monedas: Array<string> = ['USD','EUR','GBP'];
    for(j; j <= monedas.length-1;j++){
      this.cotizaServicio.listarConversiones(monedas[j]).subscribe(
        (result)=>{
        this.valoresInit[0] = result['rates'];
        this.valoresIniciales[i] = this.valoresInit[0].USD;
        i++;
        if(i == 4){
          this.valoresIniciales[i] = 1;
          i++
        }else{
        this.valoresIniciales[i] = this.valoresInit[0].EUR;
        i++;
        }
        this.valoresIniciales[i]= this.valoresInit[0].GBP;
        i++;
        
        }
      )
    }
      
  }
    
  convertir(){
    this.cotizaServicio.convertir(this.moneda1,this.moneda2,this.valorInicial).subscribe(
      (result)=>{
        this.valorConvertido = result;
      }
    )
  }    
  
  setValorInicial(num: number){
    console.log(num);
    this.valorInicial = num;
    
  }

  setMoneda1(mon: string){
    
    this.moneda1 = mon;
  }

  setMoneda2(mon: string){
    
    this.moneda1 = mon;
  }
}
