import { Component, OnInit } from '@angular/core';
import { ModelHospital } from 'src/app/model/model.hospital';
import {HospitalService} from '../../service/hospital.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  public form! :FormGroup;
  public informacionHospital={
  hos_id:-1,
  hos_nombre:"",
  hos_direccion:"",
  hos_estado:"",
  }

  constructor(private hospitalService:HospitalService, private formBuilder:FormBuilder ) { }

  hospitales:ModelHospital []=[];
  ngOnInit(): void {

    this.cargarHospital();
    this.form=this.formBuilder.group({
      txtid:-1,
      txtnombre:[''],
      txtdireccion:[''],
      txtstate:[true],
    })
  }

  public cargarHospital(){
    this.hospitalService.getHospital().subscribe(
      (hospital:any)=>{
        this.hospitales=hospital
        console.log(this.hospitales)
      },(error)=>console.log(error)
    )
  }

  public crearHospital(){
    this.hospitalService.postCreateHospital({
      hos_id:this.form.value.txtid,

      hos_nombre:this.form.value.txtnombre,
      hos_direccion:this.form.value.txtdireccion,
      hos_estado:true
    }).subscribe(res=>{
      console.log('Hospital creado correctamente')
      this.cargarHospital()
    })
  }

  public eliminarHospital(hos_id:any){
    this.hospitalService.deleteHospital(hos_id).subscribe(
      res=>console.log('Hospital eliminada correctamente'))
      this.cargarHospital()
  }

  public actualizarHospital(hos_id:any){
    this.hospitalService.putUpdateHospital({
      hos_id:hos_id,
      hos_nombre:this.form.value.txtnombre,
      hos_direccion:this.form.value.txtdireccion,
      hos_estado:this.form.value.txtstate
    }).subscribe(res=>{
      console.log('Hospital actualizada correctamente.')
      this.cargarHospital()
    })
  }

  public infoUpdateHospital(hos_id:any,hos_nombre:any,hos_direccion:any,hos_estado:any){
    this.informacionHospital.hos_id=hos_id;
    this.informacionHospital.hos_nombre=hos_nombre;
    this.informacionHospital.hos_direccion=hos_direccion;
    this.informacionHospital.hos_estado=hos_estado;
  }
  }


