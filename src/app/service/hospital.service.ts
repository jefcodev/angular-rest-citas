import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http:HttpClient) { }

  public getHospital(){
    const url= `http://localhost:4000/hospitales`
    return this.http.get(url)
  }

  public deleteHospital(hos_id:any){
    const url= `http://localhost:4000/hospitalesDelete?hos_id=`+hos_id
    return this.http.delete(url)
  }

  public postCreateHospital(body:any){
    const url= `http://localhost:4000/hospitalesInsert`
    return this.http.post(url,body)
  }

  public putUpdateHospital(body:any){
    const url= `http://localhost:4000/hospitalesUpdate`
    return this.http.put(url,body)
  } 
}
