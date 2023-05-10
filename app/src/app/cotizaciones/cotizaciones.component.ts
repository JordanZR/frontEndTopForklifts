import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2'
import {CotizacionesService} from "../cotizaciones.service";

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit{

  cotizaciones:any[] = []
  constructor(private cotizacionesService:CotizacionesService) {
  }
  ngOnInit() {
    this.getCotizaciones()
  }

  getCotizaciones():void{
    this.cotizacionesService.getCotizaciones().subscribe((data)=>{
      this.cotizaciones = data
    })
  }
  updateCotizacion(status_:string, id:number):void{
    this.cotizacionesService.updateCotizacion(status_, id).subscribe((data)=>{
      this.cotizaciones = data
    })

  }
}
