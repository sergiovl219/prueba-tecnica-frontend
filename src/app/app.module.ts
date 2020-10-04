import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ShowEmpComponent } from './empresa/show-emp/show-emp.component';
import { AddEditEmpComponent } from './empresa/add-edit-emp/add-edit-emp.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ShowEplComponent } from './empleado/show-epl/show-epl.component';
import { AddEditEplComponent } from './empleado/add-edit-epl/add-edit-epl.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    EmpleadoComponent,
    ShowEplComponent,
    AddEditEplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
