import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estadistica } from 'src/app/models/estadistica';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(private _http: HttpClient) { }

  public listarCasos():Observable<any>{
   const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
	      "x-rapidapi-key": "ef23b3a1bcmsh89655372394b06ap11eb22jsnadde9b79afd4",
      }),
    };
    return this._http.get("https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData", httpOptions);
  }

  public listarCasosMundiales():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	      "x-rapidapi-key": "ef23b3a1bcmsh89655372394b06ap11eb22jsnadde9b79afd4",
      }),
    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/totals", httpOptions);
  }
}
