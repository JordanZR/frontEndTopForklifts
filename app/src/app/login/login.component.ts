import {Component, OnInit} from '@angular/core';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginService: LoginService) {
  }

  public email:string = ""
  public password_:string = ""
  private check:boolean = false
  private email2:string = ""
  private password_2:string = ""

  ngOnInit():void {

  }
  login():any{

    //validations

    //Passing the data to Private variables
    this.email2 = this.email
    this.password_2 = this.password_

    this.loginService.login().subscribe((data)=>{
      for(let i = 0;i<data.length;i++){
        if(data[i].correo == this.email2 && data[i].password_ == this.password_2){
          Swal.fire(
            'Bienvenido',
            'Hola de nuevo ' + data[i].nombre + "!",
            'success'
          ).then(()=>{
            window.location.href = "http://localhost:4200/cotizaciones"
          })
          this.check = true
          this.email = ""
          this.password_ = ""
        }
      }
    })
    if(!this.check){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo y/o contraseña incorrectos'
      })
      this.email = ""
      this.password_ = ""
    }else{
      this.check = false
    }
  }
}
