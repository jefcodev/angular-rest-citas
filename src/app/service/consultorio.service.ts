import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  constructor(private http:HttpClient) { }

  public getConsultorio(){
    const url= `http://localhost:4000/consultorios`
    return this.http.get(url)
  }

  public deleteConsultorio(con_sala_id:any){
    const url= `http://localhost:4000/Consultorio?con_sala_id=`+con_sala_id
    return this.http.delete(url)
  }

  public postCreateConsultorio(body:any){
    const url= `http://localhost:4000/consultorio`
    return this.http.post(url,body)
  }

  public putUpdateConsultorio(body:any){
    const url= `http://localhost:4000/consultorio`
    return this.http.put(url,body)
  } 
}
