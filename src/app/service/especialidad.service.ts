import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http:HttpClient) { }

  public getEspecialidad(){
    const url= `http://localhost:4000/especialidades`
    return this.http.get(url)
  }

  public deleteEspecialidad(esp_id:any){
    const url= `http://localhost:4000/especialidades?esp_id=`+esp_id
    return this.http.delete(url)
  }

  public postCreateEspecialidad(body:any){
    const url= `http://localhost:4000/especialidades`
    return this.http.post(url,body)
  }

  public putUpdateEspecialidad(body:any){
    const url= `http://localhost:4000/especialidades`
    return this.http.put(url,body)
  } 
}
