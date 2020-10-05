import {Component, Input, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  empresaId: string;
  nombre: string;


  ngOnInit(): void {
    this.empresaId = this.emp.empresaId;
    this.nombre = this.emp.nombre;
  }

  addEmpresa(){
    const val = {
      empresaId: this.empresaId,
      nombre: this.nombre
    };
    this.service.addEmpresa(val).subscribe(res => {alert(res.toString()); });
  }

  updateEmpresa(){
    const val = {
      empresaId: this.empresaId,
      nombre: this.nombre
    };
    this.service.updateEmpresa(val).subscribe(res => {alert(res.toString()); });
  }

}
