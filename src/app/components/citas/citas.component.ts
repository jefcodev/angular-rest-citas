import { Component, OnInit } from '@angular/core';

import { ModelCitas } from 'src/app/model/model.citas';
import { CitasService } from 'src/app/service/citas.service';

// Libreria para agruapr prámetros de un formularío
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelPaciente } from 'src/app/model/model.paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { ModelMedico } from 'src/app/model/model.medico';
import { MedicoService } from 'src/app/service/medico.service';
import { ConsultorioComponent } from '../consultorio/consultorio.component';
import { ModelConsultorio } from 'src/app/model/model.consultorio';

import { ActivatedRoute } from '@angular/router';
import { ConsultorioService } from 'src/app/service/consultorio.service';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  public date = new Date();
  citas : ModelCitas []=[];
  pacientes: ModelPaciente [] = [];
  medicos: ModelMedico[]=[];
  salas : ModelConsultorio []=[];

  public paCedula!:number;
  public pacNombre!:"";

  public meCedula!:number;
  public meNombre!:"";

  public saId!:number;
  public saNombre!:"";

  public form! : FormGroup;
  
  
  public informacionCitas ={
    cita_id:-1,
    pac_cedula:1,
    med_cedula:1,
    con_sala_id:1,
    cita_fecha:"",
    cita_hora:"",
    cita_observaciones:"",
    cita_activa:true,
    cita_estado:true
  }

  constructor(private medicoService:MedicoService, 
              private salasService: ConsultorioService,
              private citasService:CitasService,
              private pacienteService:PacienteService, 
              private FormBuilder:FormBuilder, 
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCitas();
    this.cargarPaciente();
    this.cargarMedico();
    this.cargarSala();
   
this.route.params.subscribe(
  params=>{
    this.paCedula=parseInt(params['pac_cedula']),
    this.pacNombre=params['pac_nombre']
  }
  

)
this.route.params.subscribe(
  params=>{
    
    this.meCedula=parseInt(params['med_cedula']),
    this.meNombre=params['med_nombre']
  }
  

)

this.route.params.subscribe(
  params=>{
    
    this.saId=parseInt(params['con_sala_id']),
    this.saNombre=params['con_nombre']
  }
  

)


    this.form=this.FormBuilder.group({
    pacienteSelected:[],
    txtId:[''],
    txtPa_Cedula:[''],
    txtMe_Cedula:[''],
    txtSala:[''],
    txtFecha:[''],
    txtHora:[''],
    txtObserva:['']
    })
  }

  
  public cargarPaciente(){
    this.pacienteService.getPaciente().subscribe(
      (paciente:any)=>{
        this.pacientes=paciente
        console.log(this.pacientes)
      },
      (error)=>console.log(error)
    )
  }
  public cargarSala(){
    this.salasService.getConsultorio().subscribe(
      (sala:any)=>{
        this.salas=sala
        console.log(this.salas)
      },
      (error)=>console.log(error)
    )
  }
  public cargarMedico(){
    this.medicoService.getMedico().subscribe(
      (medico:any)=>{
        this.medicos=medico
        console.log(this.medicos)
      },
      (error)=>console.log(error)
    )
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
      pac_cedula: parseInt(this.form.value.txtPa_Cedula, 10),
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
      console.log('Cita eliminada correctamente')
      this.cargarCitas()
    })
  }

  public actualizarCitas(cita_id:any, pac_cedula:any){
    this.citasService.putUpdateCitas({
      cita_id:cita_id,
      pac_cedula:pac_cedula,
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
    cita_hora:any,cita_observaciones:any, cita_activa:any, cita_estado:any){
    this.informacionCitas.cita_id=cita_id;
    this.informacionCitas.pac_cedula=pac_cedula;
    this.informacionCitas.med_cedula=med_cedula;
    this.informacionCitas.con_sala_id=con_sala_id;
    this.informacionCitas.cita_fecha=cita_fecha;
    this.informacionCitas.cita_hora=cita_hora;
    this.informacionCitas.cita_observaciones=cita_observaciones;
    this.informacionCitas.cita_activa=cita_activa;
    this.informacionCitas.cita_estado=cita_estado;


    
  }





  
}
