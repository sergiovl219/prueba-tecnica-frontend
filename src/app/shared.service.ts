import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
// TODO: Puede quedar en settigs? Para poderse importar si es STG, QA, PROD.
readonly APIUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'empresa/');
  }

  getNombresEmpresas(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'empresa/');
  }

  addEmpresa(val: any){
    return this.http.post(this.APIUrl + 'empresa/', val);
  }

  updateEmpresa(val: any){
    return this.http.put(this.APIUrl + 'empresa/', val);
  }

  deleteEmpresa(val: any) {
    return this.http.delete(this.APIUrl + 'empresa/' + val);
  }

  getEmpleados(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'empleado/');
  }

  addEmpleado(val: any) {
    return this.http.post(this.APIUrl + 'empleado/', val);
  }

  addEmpleadoFoto(val: any){
    return this.http.post(this.APIUrl + 'empleado/foto', val);
  }

  updateEmpleado(val: any){
    return this.http.put(this.APIUrl + 'empleado/', val);
  }

  deleteEmpleado(val: any){
    return this.http.delete(this.APIUrl + 'empleado/' + val);
  }

  getRoles(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'rol/');
  }

  getNombresRoles(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'rol/');
  }

  addRol(val: any){
    return this.http.post(this.APIUrl + 'rol/', val);
  }

  updateRol(val: any){
    return this.http.put(this.APIUrl + 'rol/', val);
  }

  deleteRol(val: any) {
    return this.http.delete(this.APIUrl + 'rol/' + val);
  }
}
