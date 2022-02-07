import { Component, OnInit } from '@angular/core';

import { ModelCitas } from 'src/app/model/model.citas';
import { CitasService } from 'src/app/service/citas.service';

// Libreria para agruapr prámetros de un formularío
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  public date = new Date();
  citas : ModelCitas []=[];
  public form! : FormGroup;
  public informacionCitas ={
    cita_id:1,
    pac_cedula:1,
    med_cedula:1,
    con_sala_id:1,
    cita_fecha:"",
    cita_hora:"",
    cita_observaciones:"",
    cita_activa:true,
    cita_estado:true
  }

  constructor(private citasService:CitasService, private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.cargarCitas();
    this.form=this.FormBuilder.group({
    txtId:[''],
    txtPa_Cedula:[''],
    txtMe_Cedula:[''],
    txtSala:[''],
    txtFecha:[''],
    txtHora:[''],
    txtObserva:['']
    })
  }

  


  public cargarCitas(){
    this.citasService.getCitas().subscribe(
      (cita:any)=>{
        this.citas=cita
        console.log(this.citas)
      },
      (error)=>console.log(error)
    )
  }

  public crearCitas(){
    this.citasService.postCreateCitas({
      cita_id:this.form.value.txtId,
      pac_cedula:this.form.value.txtPa_Cedula,
      med_cedula:this.form.value.txtMe_Cedula,
      con_sala_id:this.form.value.txtSala,
      cita_fecha:this.form.value.txtFecha,
      cita_hora:this.form.value.txtHora,
      cita_observaciones:this.form.value.txtObserva,
      cita_activa:true,
      cita_estado:true

    }).subscribe(res=>{
      console.log('Cita creada correctamente')
      this.cargarCitas()
    })
  }

  public eliminarCita(cita_id:any){
    this.citasService.deleteCitas(cita_id).subscribe(res=>{
      console.log('Paciente eliminado correctamente')
      this.cargarCitas()
    })
  }

  public actualizarCitas(cita_id:any){
    this.citasService.putUpdateCitas({
      cita_id:cita_id,
      pac_cedula:this.form.value.txtPa_Cedula,
      med_cedula:this.form.value.txtMe_Cedula,
      con_sala_id:this.form.value.txtSala,
      cita_fecha:this.form.value.txtFecha,
      cita_hora:this.form.value.txtHora,
      cita_observaciones:this.form.value.txtObserva,
      cita_activa:true,
      cita_estado:true
    }).subscribe(res=>{
      console.log('Cita actualizada correctamente')
      this.cargarCitas();
    })
  }

  public infoUpdateCitas(cita_id:any, pac_cedula:any,med_cedula:any,con_sala_id:any,cita_fecha:any,
    cita_hora:any,cita_observaciones:any){
    this.informacionCitas.cita_id=cita_id;
    this.informacionCitas.pac_cedula=pac_cedula;
    this.informacionCitas.med_cedula=med_cedula;
    this.informacionCitas.con_sala_id=con_sala_id;
    this.informacionCitas.cita_fecha=cita_fecha;
    this.informacionCitas.cita_hora=cita_hora;
    this.informacionCitas.cita_observaciones=cita_observaciones;
    this.informacionCitas.cita_activa=true;
    this.informacionCitas.cita_estado=true;


    
  }

}
