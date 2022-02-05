import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

 
  constructor(private http:HttpClient) { }

  public getPaciente(){
    const url= `http://localhost:4000/paciente`
    return this.http.get(url)
  }

  public deletePaciente(pac_cedula:any){
    const url= `http://localhost:4000/paciente?pac_cedula=`+pac_cedula
    return this.http.delete(url)
  }

  public postCreatePaciente(body:any){
    const url= `http://localhost:4000/pacienteInsert`
    return this.http.post(url,body)
  }

  public putUpdatePaciente(body:any){
    const url= `http://localhost:4000/paciente`
    return this.http.put(url,body)
  } 
}
