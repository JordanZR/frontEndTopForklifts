import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost:4000/inventario';

  constructor(private http: HttpClient) { }

  getInventario():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  postInventario(nombre_:string, modelo_:string, cantidad_:number, precio_:number):Observable<any>{
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
    return this.http.post(this.apiUrl,{
      nombre:nombre_,
      modelo:modelo_,
      cantidad:cantidad_,
      precio:precio_,
      trabajador_modificacion_id:1,
      fecha_modificacion:formattedDate
    })
  }
  putInventario(nombre_:string, modelo_:string, cantidad_:number, precio_:number, id_:number):Observable<any>{
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
    return this.http.put(this.apiUrl,{
      nombre:nombre_,
      modelo:modelo_,
      cantidad:cantidad_,
      precio:precio_,
      trabajador_modificacion_id:1,
      fecha_modificacion:formattedDate,
      id:id_
    })
  }
  deleteInventario(id_:number):Observable<any>{
    return this.http.delete(this.apiUrl + "/"+id_)
  }
}
