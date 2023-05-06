import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import { EmailService } from '../email.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  public formCotizacion:FormGroup = new FormGroup({})
  public textValidator:any[] = ['',
    [
      Validators.pattern('[A-z]+'),
      Validators.maxLength(20)
    ]
  ]
  public email:string = ""
  public detalle:string = ""

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {

  }
  ngOnInit():void {
    this.formCotizacion = this.formBuilder.group({
      email: ['',
        [
          Validators.email]],
      telefono: ['',
        [
          Validators.pattern('[0-9]{8}')
        ]
      ],
      nombre: this.textValidator,
      apellido: this.textValidator,
      empresa: ['',
        Validators.required
      ],
      detalle: ['',
        Validators.required
      ]
    })
  }

  send():any{
    Swal.fire(
      'Solicitud enviada!',
      'Nos pondremos en contacto contigo al a brevedad posible!',
      'success'
    )
    this.emailService.sendEmail(
      this.formCotizacion.value.email,
      this.formCotizacion.value.detalle,
      this.formCotizacion.value.nombre,
      this.formCotizacion.value.apellido,
      this.formCotizacion.value.telefono,
      this.formCotizacion.value.empresa
    ).subscribe()

    this.formCotizacion.reset()

    /*Receive data
    this.emailService.nameOfFunction(parameters).subscribe(() => {
      actions
    });
    */
  }
}
