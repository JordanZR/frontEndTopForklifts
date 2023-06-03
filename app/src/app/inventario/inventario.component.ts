import { Component, OnInit } from '@angular/core';
import{InventarioService} from "../inventario.service";
import Swal from 'sweetalert2'
import {modifierPhases} from "@popperjs/core";

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{

  inventario:any[] = []
  identificador:boolean = false
  public nombre:string = ""
  public modelo:string = ""
  public cantidad:number = 1
  public precio:number = 0.0
  private id:number = 0

  constructor(private inventarioService:InventarioService) {
  }
  ngOnInit() {
    this.inventarioService.getInventario().subscribe((data)=>{
      this.inventario = data
    })
  }
  send():void{
    //Verificamos si es un post o un update
    if(!this.identificador){
      this.inventarioService.postInventario(this.nombre,this.modelo,this.cantidad,this.precio).subscribe((data)=>{
        this.inventario = data
      })
    }else{
      this.inventarioService.putInventario(this.nombre,this.modelo,this.cantidad,this.precio, this.id).subscribe((data)=>{
        this.inventario = data
      })
      this.identificador = false
    }
    this.nombre = ""
    this.modelo = ""
    this.cantidad = 1
    this.precio = 0
    this.id = 0
  }

  delete(id:number):void{
    this.inventarioService.deleteInventario(id).subscribe((data)=>{
      this.inventario = data
    })
  }

  update(inventario:any):void{
    this.identificador = true
    this.nombre = inventario.nombre
    this.modelo = inventario.modelo
    this.cantidad = inventario.cantidad
    this.precio = inventario.precio
    this.id = inventario.id
  }

}
