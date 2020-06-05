import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public sacarSigno(signo: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
	      "x-rapidapi-key": "ef23b3a1bcmsh89655372394b06ap11eb22jsnadde9b79afd4",
      }),
    };
    return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign="+signo+"&day=today",null, httpOptions);
  }
}
