import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ShowEmpComponent } from './empresa/show-emp/show-emp.component';
import { AddEditEmpComponent } from './empresa/add-edit-emp/add-edit-emp.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ShowEplComponent } from './empleado/show-epl/show-epl.component';
import { AddEditEplComponent } from './empleado/add-edit-epl/add-edit-epl.component';
import { SharedService } from './shared.service';
import { RolComponent } from './rol/rol.component';
import { ShowRolComponent } from './rol/show-rol/show-rol.component';
import { AddEditRolComponent } from './rol/add-edit-rol/add-edit-rol.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    EmpleadoComponent,
    ShowEplComponent,
    AddEditEplComponent,
    RolComponent,
    ShowRolComponent,
    AddEditRolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
