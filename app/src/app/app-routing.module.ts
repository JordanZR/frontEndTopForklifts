import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LandingComponent} from "./landing/landing.component";
import {CotizacionesComponent} from "./cotizaciones/cotizaciones.component";
import {InventarioComponent} from "./inventario/inventario.component";
import {AddBoletaComponent} from "./add-boleta/add-boleta.component";
import {CheckBoletaComponent} from "./check-boleta/check-boleta.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'cotizaciones', component: CotizacionesComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'addBoleta', component: AddBoletaComponent},
  {path:'checkBoleta', component: CheckBoletaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
