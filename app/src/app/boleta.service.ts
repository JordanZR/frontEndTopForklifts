import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {
  private apiUrl = 'http://localhost:4000/boleta';
  private apirUrl2 = 'http://localhost:4000/boletas'

  constructor(private http: HttpClient) { }

  addBoleta(idEmpleado:number, mes:string, quincena:number, salario:number):Observable<any>{
    return this.http.post<any>(this.apiUrl,{
      idEmpleado:idEmpleado,
      mes:mes,
      quincena:quincena,
      salario:salario,
      afp:(salario*0.035).toFixed(2),
      renta:(salario*0.10).toFixed(2),
      isss:(salario*0.03).toFixed(2),
      totalNeto:(salario-(salario*0.035+salario*0.10+salario*0.03)).toFixed(2),
      descuentos:(salario*0.035+salario*0.10+salario*0.03).toFixed(2)
    })
  }

  getBoletas():Observable<any>{
    return this.http.get(this.apirUrl2)
  }
  getBoleta(quincena:number, mes:string):Observable<any>{
    return this.http.get("http://localhost:4000/boleta/" + mes + "/" + quincena)
  }
}
