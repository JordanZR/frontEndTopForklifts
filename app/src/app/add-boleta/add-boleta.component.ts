import {Component, OnInit} from '@angular/core';
import{LoginService} from "../login.service";
import{BoletaService} from "../boleta.service";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-boleta',
  templateUrl: './add-boleta.component.html',
  styleUrls: ['./add-boleta.component.css']
})
export class AddBoletaComponent implements OnInit{

  public users:any[]=[]
  public meses:string[] = []
  public idEmpleado:number = 0
  public salario:number = 0.0
  public mes:string = ""
  public quincena:number = 0

  constructor(private loginService:LoginService, private boletaServie:BoletaService) {
  }

  ngOnInit() {
    this.loginService.login().subscribe((data)=>{
      this.users = data
    })
    this.meses.push("Enero")
    this.meses.push("Febrero")
    this.meses.push("Marzo")
    this.meses.push("Abril")
    this.meses.push("Mayo")
    this.meses.push("Junio")
    this.meses.push("Julio")
    this.meses.push("Agosto")
    this.meses.push("Septiembre")
    this.meses.push("Octubre")
    this.meses.push("Noviembre")
    this.meses.push("Diciembre")
  }

  send():void{
    this.boletaServie.addBoleta(this.idEmpleado, this.mes,this.quincena,this.salario).subscribe()
    Swal.fire(
      'Excelente',
      'Boleta agregada exitosamente',
      'success'
    )
    this.salario = 0.0
    this.quincena = 1
    this.mes = ""
  }
}
