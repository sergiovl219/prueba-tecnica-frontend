import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmpresasList: any = [];

  ModalTitle: string;
  ActivateAddEditEmpComp = false;
  emp: any;

  empresaIdFilter: string;
  empresaNombreFilter: string;
  empresaListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp = {
      empresaId: 0,
      nombre: ''
    };
    this.ModalTitle = 'Agregar Empresa';
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  editClick(item){
    this.emp = item;
    this.ModalTitle = 'Editar Empresa';
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item){
    if (confirm(`Seguro de borrar la empresa ${ item.nombre }?`)) {
      this.service.deleteEmpresa(item.empresaId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  refreshEmpList(){
    this.service.getEmpresas().subscribe(data => {this.EmpresasList = data; this.empresaListWithoutFilter = data; });
  }

  filterFn(){
    const empresaIdFilter = this.empresaIdFilter;
    const empresaNombreFilter = this.empresaNombreFilter;

    // tslint:disable-next-line:only-arrow-functions typedef
    this.EmpresasList = this.empresaListWithoutFilter.filter(function(el){
      return el.empresaId.toString().toLowerCase().includes(
        empresaIdFilter.toString().trim().toLowerCase()
      ) &&
        el.nombre.toString().toLowerCase().includes(
          empresaNombreFilter.toString().trim().toLowerCase()
        );
      });
  }

  sortResult(prop, asc){
    // tslint:disable-next-line:only-arrow-functions typedef
    this.EmpresasList = this.empresaListWithoutFilter.sort(function(a, b){
      if (asc){
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

}
