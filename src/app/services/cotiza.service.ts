import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CotizaService {

  constructor(private _http: HttpClient) { }

  public convertir(de: string, a: string, valor: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
      "x-rapidapi-key": "ef23b3a1bcmsh89655372394b06ap11eb22jsnadde9b79afd4",
      }),
      /*params:{
        'from-type': de,
        'to-type': a,
        'from-value': valor,
      },*/
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",{'from-type': de,'to-type': a,'from-value': valor,}, httpOptions);
  }

  public listarConversiones(moneda: string):Observable<any>{
    return this._http.get("https://api.exchangeratesapi.io/latest?base="+moneda);
  }
}
