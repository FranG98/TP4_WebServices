import { Component, OnInit } from '@angular/core';
import { Signo } from 'src/app/models/signo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  signoElegido: string = "Cancer";
  signo: Signo;
  descripcion: string;
  resultado: Array<any>;
  constructor(public signoService: HoroscopoService) { 
    this.signo = new Signo();
    this.resultado = new Array<any>();
    this.cambiarSigno(this.signoElegido);
  }

  ngOnInit(): void {
  }

  cambiarSigno(signo: string){
    if(signo == "Taurus"){
      this.signoElegido = "Tauro";
      this.signo.img = "../../../assets/media/tauro2.jpg";
    }else{

      if(signo == "Gemini"){
      this.signoElegido = "Géminis";
      this.signo.img = "../../../assets/media/geminis2.jpg"; 

      }else{

      if(signo == "Scorpio"){
        this.signoElegido = "Escorpio";
        this.signo.img = "../../../assets/media/escorpio2.jpg";  

      }else{

        if(signo == "Sagittarius"){
          this.signoElegido = "Sagitario";
          this.signo.img = "../../../assets/media/sagitario2.jpg";  

        }else{
          
          if(signo == "Capricorn"){
            this.signoElegido = "Capricornio";
            this.signo.img = "../../../assets/media/capricornio2.jpg";  

          }else{
            
            if(signo == "Aquarius"){
              this.signoElegido = "Acuario";
              this.signo.img = "../../../assets/media/acuario2.jpg";  
            }else{

              if(signo == "Pisces"){
                this.signoElegido = "Piscis";
                this.signo.img = "../../../assets/media/piscis2.jpg";  
              }else{
                this.signoElegido = signo;
              }
            }

          }
        }

      }
      
    }
  }
    
    
    this.signoService.sacarSigno(signo).subscribe(
      (res: any)=>{
      this.descripcion = res.description;
    });

    if(this.signoElegido == "Cancer"){
      this.signo.img = "../../../assets/media/cancer2.jpg";  
    }else{
      if(this.signoElegido == "Leo"){
        this.signo.img = "../../../assets/media/leo2.jpg";  
      }else{
        if(this.signoElegido == "Aries"){
          this.signo.img = "../../../assets/media/aries2.jpg";  
        }else{
          if(this.signoElegido == "Virgo"){
            this.signo.img = "../../../assets/media/virgo2.jpg";  
          }else{
            if(this.signoElegido == "Libra"){
              this.signo.img = "../../../assets/media/libra2.jpg";  
            }
          }
        }
      }
    }
  }
}
