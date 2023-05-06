import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:4000/email';
  //private apiUrl = 'http://localhost:4000/email';

  constructor(private http: HttpClient) { }

  sendEmail(email:string, detalle:string, nombre:string, apellido:string, telefono:string, empresa:string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      email: email,
      detalle:detalle,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      empresa: empresa
    });
  }

}
