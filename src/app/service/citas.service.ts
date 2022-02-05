import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http:HttpClient) { }

  public getCitas(){
    const url= `http://localhost:4000/citas`
    return this.http.get(url)
  }

  public deleteCitas(cit_id:any){
    const url= `http://localhost:4000/citas?cit_id=`+cit_id
    return this.http.delete(url)
  }

  public postCreateCitas(body:any){
    const url= `http://localhost:4000/citas`
    return this.http.post(url,body)
  }

  public putUpdateCitas(body:any){
    const url= `http://localhost:4000/citas`
    return this.http.put(url,body)
  } 
}

