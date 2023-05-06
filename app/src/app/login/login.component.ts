import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
  }

  public email:string = ""
  public password_:string = ""
  private users:any[] = []
  private check:boolean = false
  login():any{

    //comprobaciones

    this.loginService.login().subscribe((data)=>{
      for(let i = 0;i<data.length;i++){
        this.users.push(data[i])
        if(this.users[i].correo == this.email && this.users[i].password_ == this.password_){
          this.email = ""
          this.password_ = ""
          Swal.fire(
            'Bienvenido',
            'Hola de nuevo ' + this.users[i].nombre + "!",
            'success'
          )
          this.check = true
        }
      }
    })
    if(this.check == false){
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
