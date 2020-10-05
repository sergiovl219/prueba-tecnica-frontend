import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { RolComponent } from './rol/rol.component';

const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'rol', component: RolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
