import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  public listNoticias(categoria: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
        "x-rapidapi-key": "ef23b3a1bcmsh89655372394b06ap11eb22jsnadde9b79afd4",
      })
    };
      return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions)
  }
}
