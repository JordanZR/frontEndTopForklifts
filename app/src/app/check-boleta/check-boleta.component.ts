import {Component, OnInit} from '@angular/core';
import{BoletaService} from "../boleta.service";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-check-boleta',
  templateUrl: './check-boleta.component.html',
  styleUrls: ['./check-boleta.component.css']
})
export class CheckBoletaComponent implements OnInit{
  public meses:string[] = []
  public boletas:any[] = []
  public boletasFilter:any[] = []

  constructor(private boletaService:BoletaService) {
  }
  ngOnInit() {
    this.boletaService.getBoletas().subscribe((data)=>{
      this.boletas = data
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

  filtroQuincena():void{
    const selectElementQuincena = document.getElementById('selectQuincena') as HTMLSelectElement;
    const selectElementMes = document.getElementById("selectMes") as HTMLSelectElement
    const mes = selectElementMes.value
    const quincena = selectElementQuincena.value
    if(quincena != "-" && mes !="-"){
      this.boletaService.getBoleta(parseInt(quincena),mes).subscribe((data)=>{
        this.boletas = data
      })
    }else{
      this.boletaService.getBoletas().subscribe((data)=>{
        this.boletas = data
      })
    }
  }
}
