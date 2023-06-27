import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://backendtopforklifts.onrender.com/email';
  //private apiUrl = 'http://localhost:4000/email';

  constructor(private http: HttpClient) { }

  sendEmail(correo:string, nombre:string, apellido:string, telefono:string, empresa:string, contenido:string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      correo: correo,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      empresa: empresa,
      contenido: contenido
    });
  }

}
