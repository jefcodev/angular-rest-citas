import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoespecialidadespecialidadService {

  constructor(private http:HttpClient) { }

  public getMedicoespecialidad(){
    const url= `http://localhost:4000/medicoespecialidad`
    return this.http.get(url)
  }

  public deleteMedicoespecialidad(med_cedula:any){
    const url= `http://localhost:4000/medicoespecialidad?med_cedula=`+med_cedula
    return this.http.delete(url)
  }

  public postCreateMedicoespecialidad(body:any){
    const url= `http://localhost:4000/medicoespecialidad`
    return this.http.post(url,body)
  }

  public putUpdateMedicoespecialidad(body:any){
    const url= `http://localhost:4000/medicoespecialidad`
    return this.http.put(url,body)
  } 
}
