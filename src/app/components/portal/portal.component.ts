import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  categoria: string = "soccer";
  noticia: Noticia;
  vector_noticia: Array<Noticia>;
  constructor(private noticiaService: NoticiaService) { 
    this.noticia = new Noticia();
    this.vector_noticia = new Array<Noticia>();
    this.noticiaService.listNoticias(this.categoria).subscribe(
      (result) =>{
        this.vector_noticia = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia,element);
          this.vector_noticia.push(this.noticia);
        });
      },
      error => { alert("error en la peticion");}
    )
  }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    
  }
}
