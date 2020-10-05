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

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpresas().subscribe(data => {this.EmpresasList = data; });
  }

}
