import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-rol',
  templateUrl: './show-rol.component.html',
  styleUrls: ['./show-rol.component.css']
})
export class ShowRolComponent implements OnInit {

  constructor(private service: SharedService) { }

  RolesList: any = [];

  ModalTitle: string;
  ActivateAddEditRolComp = false;
  rol: any;

  ngOnInit(): void {
    this.refreshRolList();
  }

  addClick(){
    this.rol = {
      rolId: 0,
      nombreRol: '',
    };
    this.ModalTitle = 'Agregar Rol';
    this.ActivateAddEditRolComp = true;
  }

  closeClick(){
    this.ActivateAddEditRolComp = false;
    this.refreshRolList();
  }

  editClick(item){
    this.rol = item;
    this.ModalTitle = 'Editar Rol';
    this.ActivateAddEditRolComp = true;
  }

  deleteClick(item){
    if (confirm(`Seguro de borrar el Rol ${ item.nombreRol }?`)) {
      this.service.deleteRol(item.rolId).subscribe(data => {
        alert(data.toString());
        this.refreshRolList();
      });
    }
  }

  refreshRolList(){
    this.service.getRoles().subscribe(data => {this.RolesList = data; });
  }

}

