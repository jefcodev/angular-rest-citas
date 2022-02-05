import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

import { ModelMedico } from 'src/app/model/model.medico';
import {MedicoService} from '../../service/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

 
  public form! : FormGroup;
  public informacionMedico={
    med_cedula:-1,
    med_nombres:"",
    med_apellidos:"",
    med_telefono:"",
    med_direccion:"",
    med_correo:"",
    med_estado:true

  }



  constructor(private medicoService:MedicoService, private formBuilder:FormBuilder) { }

  
  medicos:ModelMedico[]=[];
  ngOnInit(): void {
    this.cargarMedico();
    this.form=this.formBuilder.group({
    txtCedula:-1,
    txtnombres:[''],
    txtapellidos:[''],
    txttelefono:[''],
    txtdireccion:[''],
    txtcorreo:[''],
    txtestado:true
    })
  }
  public cargarMedico(){
    this.medicoService.getMedico().subscribe(
      (medico:any)=>{
        this.medicos=medico
        console.log(this.medicos)
        
      },(error)=>console.log(error)
    )
  }
  public crearMedico(){
    this.medicoService.postCreateMedico({
      med_cedula:this.form.value.txtCedula,
      med_nombres:this.form.value.txtnombres,
      med_apellidos:this.form.value.txtapellidos,
      med_telefono:this.form.value.txttelefono,
      med_direccion:this.form.value.txtdireccion,
      med_correo:this.form.value.txtcorreo,
      med_estado:true

    }).subscribe(res=>{
      console.log('Medico creada correctamente')
      this.cargarMedico()
    })
  }

  public eliminarMedico(med_cedula:any){
    this.medicoService.deleteMedico(med_cedula).subscribe(
      res=>console.log('Medico eliminado correctamente'))
      this.cargarMedico()
  }

  public actualizarMedico(med_cedula:any){
    this.medicoService.putUpdateMedico({
      med_cedula:med_cedula,
      med_nombres:this.form.value.txtnombres,
      med_apellidos:this.form.value.txtapellidos,
      med_telefono:this.form.value.txttelefono,
      med_direccion:this.form.value.txtdireccion,
      med_correo:this.form.value.txtcorreo,
      med_estado:true
    }).subscribe(res=>{
      console.log('Medico actualizado correctamente.')
      this.cargarMedico()
    })
  }
  public infoUpdateMedico(med_cedula:any,med_nombres:any,med_apellidos:any,med_telefono:any,med_direccion:any,med_correo:any,med_estado:any){
    this.informacionMedico.med_cedula=med_cedula;
    this.informacionMedico.med_nombres=med_nombres;
    this.informacionMedico.med_apellidos=med_apellidos;
    this.informacionMedico.med_telefono=med_telefono;
    this.informacionMedico.med_direccion=med_direccion;
    this.informacionMedico.med_correo=med_correo;
    this.informacionMedico.med_estado=med_estado;
  }

}
