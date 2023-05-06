import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:4000/usuarios';

  constructor(private http: HttpClient) { }

  login():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
