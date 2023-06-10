import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LandingComponent } from './landing/landing.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NavComponent } from './nav/nav.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { InventarioComponent } from './inventario/inventario.component';
import { AddBoletaComponent } from './add-boleta/add-boleta.component';
import { CheckBoletaComponent } from './check-boleta/check-boleta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    NavComponent,
    CotizacionesComponent,
    InventarioComponent,
    AddBoletaComponent,
    CheckBoletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
