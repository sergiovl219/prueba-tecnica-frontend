import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-epl',
  templateUrl: './show-epl.component.html',
  styleUrls: ['./show-epl.component.css']
})
export class ShowEplComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmpleadosList: any = [];

  ModalTitle: string;
  ActivateAddEditEplComp = false;
  epl: any;

  ngOnInit(): void {
    this.refreshEplList();
  }

  addClick(){
    this.epl = {
      empleadoId: 0,
      nombre: '',
      empresa: '',
      fechaIngreso: '',
      fotoId: 'anonymous.png'
    };
    this.ModalTitle = 'Agregar Empleado';
    this.ActivateAddEditEplComp = true;
  }

  closeClick(){
    this.ActivateAddEditEplComp = false;
    this.refreshEplList();
  }

  editClick(item){
    this.epl = item;
    this.ModalTitle = 'Editar Empleado';
    this.ActivateAddEditEplComp = true;
  }

  deleteClick(item){
    if (confirm(`Seguro de borrar al empleado ${ item.nombre }?`)) {
      this.service.deleteEmpleado(item.empleadoId).subscribe(data => {
        alert(data.toString());
        this.refreshEplList();
      });
    }
  }

  refreshEplList(){
    this.service.getEmpleados().subscribe(data => {this.EmpleadosList = data; });
  }

}
