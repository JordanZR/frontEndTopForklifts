import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {
  private apiUrl = 'https://backendtopforklifts.onrender.com/cotizacion';


  constructor(private http: HttpClient) { }

  getCotizaciones():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  updateCotizacion(status_:string, id:number):Observable<any>{
    return this.http.put(this.apiUrl,{
      status_:status_,
      id:id
    })
  }
}
