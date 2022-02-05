import { Component, OnInit } from '@angular/core';
import { ModelPaciente } from 'src/app/model/model.paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { FormBuilder, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  public date = new Date();
  pacientes:ModelPaciente []=[];
  public form! : FormGroup;
 

  public informacionPaciente={
    pac_cedula:-1,
    pac_nombres:"",
    pac_apellidos:"",
    pac_genero:"",
    pac_nacionalidad:"",
    pac_fechanac:"",
    pac_direccion:"",
    pac_correo:"",
    pac_telefono:"",
    pac_estado:true
  }

  constructor(private pacienteService:PacienteService, private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  
  
    this.cargarPaciente();
    this.form=this.FormBuilder.group({
      txtCi:-1,
      txtNombres:[''],
      txtApellidos:[''],
      txtGenero:[''],
      txtNacionalidad:[''],
      txtFechaNac:[''],
      txtDireccion:[''],
      txtCorreo:[''],
      txtTelefono:[''],
    })
  }
  public cargarPaciente(){
    this.pacienteService.getPaciente().subscribe(
      (pacientes:any)=>{
        this.pacientes=pacientes
        console.log(this.pacientes)
      },
      (error)=>console.log(error)
    )
  }

  public crearPaciente(){
    this.pacienteService.postCreatePaciente({
    pac_cedula:this.form.value.txtCi,
    pac_nombres:this.form.value.txtNombres,
    pac_apellidos:this.form.value.txtApellidos,
    pac_genero:this.form.value.txtGenero,
    pac_nacionalidad:this.form.value.txtNacionalidad,
    pac_fechanac:this.form.value.txtFechaNac,
    pac_direccion:this.form.value.txtDireccion,
    pac_correo:this.form.value.txtCorreo,
    pac_telefono:this.form.value.txtTelefono,
    pac_estado:true
    }).subscribe(res=>{
      console.log('Paciente creado correctamente')
      this.cargarPaciente()
    })
  }

  public eliminarPaciente(pac_cedula:any){
    this.pacienteService.deletePaciente(pac_cedula).subscribe(res=>{
      console.log('Paciente eliminado correctamente')
      this.cargarPaciente()
    })
  }

  public actualizarPaciente(pac_cedula:any){
    this.pacienteService.putUpdatePaciente({
    pac_cedula:this.form.value.txtCi,
    pac_nombres:this.form.value.txtNombres,
    pac_apellidos:this.form.value.txtApellidos,
    pac_genero:this.form.value.txtGenero,
    pac_nacionalidad:this.form.value.txtNacionalidad,
    pac_fechanac:this.form.value.txtFechaNac,
    pac_direccion:this.form.value.txtDireccion,
    pac_correo:this.form.value.txtCorreo,
    pac_telefono:this.form.value.txtTelefono,
    pac_estado:true
    }).subscribe(res=>{
      console.log('Paciente actualizado correctamente')
      this.cargarPaciente();
    })
  }

  public infoUpdatePaciente(pac_cedula:any, pac_nombres:any,pac_apellidos:any,pac_genero:any,pac_nacionalidad:any,
                            pac_fechanac:any,pac_direccion:any,pac_correo:any,pac_telefono:any,pac_estado:any){
    this.informacionPaciente.pac_cedula=pac_cedula;
    this.informacionPaciente.pac_nombres=pac_nombres;
    this.informacionPaciente.pac_apellidos=pac_apellidos;
    this.informacionPaciente.pac_genero=pac_genero;
    this.informacionPaciente.pac_nacionalidad=pac_nacionalidad;
    this.informacionPaciente.pac_fechanac=pac_fechanac;
    this.informacionPaciente.pac_direccion=pac_direccion;
    this.informacionPaciente.pac_correo=pac_correo;
    this.informacionPaciente.pac_telefono=pac_telefono;
    this.informacionPaciente.pac_estado=true;
  }

}



