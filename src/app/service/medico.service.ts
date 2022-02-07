import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http:HttpClient) { }

  public getMedico(){
    const url= `http://localhost:4000/medicos`
    return this.http.get(url)
  }

  public deleteMedico(med_cedula:any){
    const url= `http://localhost:4000/medicoDelete?med_cedula=`+med_cedula
    return this.http.delete(url)
  }

  public postCreateMedico(body:any){
    const url= `http://localhost:4000/medicoInsert`
    return this.http.post(url,body)
  }

  public putUpdateMedico(body:any){
    const url= `http://localhost:4000/medicoUpdate`
    return this.http.put(url,body)
  } 
}
