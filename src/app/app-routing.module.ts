import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
