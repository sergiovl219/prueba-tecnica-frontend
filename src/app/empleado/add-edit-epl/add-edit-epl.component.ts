import {Component, Input, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-epl',
  templateUrl: './add-edit-epl.component.html',
  styleUrls: ['./add-edit-epl.component.css']
})
export class AddEditEplComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() epl: any;
  empleadoId: string;
  nombre: string;
  empresa: string;
  fechaIngreso: string;
  fotoId: string;
  fotoPath: string;
  empresasList: any = [];


  ngOnInit(): void {
    this.loadEmpresasList();
  }

  loadEmpresasList(){
    this.service.getNombresEmpresas().subscribe((data: any) => {
      this.empresasList = data;
      this.empleadoId = this.epl.empleadoId;
      this.nombre = this.epl.nombre;
      this.empresa = this.epl.empresa;
      this.fechaIngreso = this.epl.fechaIngreso;
      this.fotoId = this.epl.fotoId;
      this.fotoPath = this.service.APIUrl + 'empleado/media/' + this.fotoId;
    });
  }

  addEmpleado(){
    const val = {
      empleadoId: this.empleadoId,
      nombre: this.nombre,
      empresa: this.empresa,
      fechaIngreso: this.fechaIngreso,
      fotoId: this.fotoId,
    };
    this.service.addEmpleado(val).subscribe(res => {alert(res.toString()); });
  }

  updateEmpleado(){
    const val = {
      empleadoId: this.empleadoId,
      nombre: this.nombre,
      empresa: this.empresa,
      fechaIngreso: this.fechaIngreso,
      fotoId: this.fotoId,
    };
    this.service.updateEmpleado(val).subscribe(res => {alert(res.toString()); });
  }

  uploadFoto(event){
    const file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('archivo', file, file.name);
    this.service.addEmpleadoFoto(formData).subscribe((data: any) => {
      this.fotoId = data.toString();
      this.fotoPath = this.service.APIUrl + 'empleado/media/' + this.fotoId;
    });
  }

}
