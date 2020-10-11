import {Component, Input, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-rol',
  templateUrl: './add-edit-rol.component.html',
  styleUrls: ['./add-edit-rol.component.css']
})
export class AddEditRolComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() rol: any;
  rolId: string;
  nombreRol: string;
  rolesList: any = [];


  ngOnInit(): void {
    this.loadRolesList();
  }

  loadRolesList(){
    this.service.getNombresRoles().subscribe((data: any) => {
      this.rolesList = data;
      this.rolId = this.rol.rolId;
      this.nombreRol = this.rol.nombreRol;
    });
  }

  addRole(){
    const val = {
      rolId: this.rolId,
      nombreRol: this.nombreRol
    };
    this.service.addRol(val).subscribe(res => {alert(res.toString()); });
  }

  updateRole(){
    const val = {
      rolId: this.rolId,
      nombreRol: this.nombreRol
    };
    console.log(val);
    this.service.updateRol(val).subscribe(res => {alert(res.toString()); });
  }

}
