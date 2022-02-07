import { Component, OnInit } from '@angular/core';
import { ModelEspecialidad } from 'src/app/model/model.especialidad'; 
import { EspecialidadService } from 'src/app/service/especialidad.service'; 
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {
  public form! : FormGroup;
  public informacionEspecialidad ={
    esp_id:-1,
    esp_nombre:"",
    esp_estado:"",
  }


  constructor(private especialidadService:EspecialidadService, private FormBuilder:FormBuilder) { }
  
  especialidades:ModelEspecialidad []=[];
  ngOnInit(): void {

    this.cargarEspecialidad();

    this.form=this.FormBuilder.group({
      txtid:'-1',
      txtnombre:['']
    })
  }

  public cargarEspecialidad(){
    this.especialidadService.getEspecialidad().subscribe(
      (especialidad:any)=>{
        this.especialidades=especialidad
        console.log(this.especialidades)
      },
      (error)=>console.log(error) 
    )
  }
  public crearEspecialidad() {
    this.especialidadService.postCreateEspecialidad({
      esp_id: this.form.value.txtid,
      esp_nombre: this.form.value.txtnombre,
      esp_estado: true
    }).subscribe(res => {
      console.log('Especialidad  creada correctamente')
      this.cargarEspecialidad()
    })

  }
  public eliminarEspecialidad(esp_id: any) {
    this.especialidadService.deleteEspecialidad(esp_id).subscribe(
      res => {
        console.log('Especialidad eliminada correctamente')
        this.cargarEspecialidad()
      }
    )
  }


  public actualizarEspecialidad(esp_id:any){
    this.especialidadService.putUpdateEspecialidad({
      esp_id:esp_id,
      esp_nombre:this.form.value.txtnombre,
      esp_estado:true
    }).subscribe(res=>{
      console.log('Especialidad actualizada correctamente.')
      this.cargarEspecialidad()
    })
  }



   public infoUpdateEspecialidades(esp_id:any, esp_nombre:any,esp_estado:any){
    this.informacionEspecialidad.esp_id=esp_id;
    this.informacionEspecialidad.esp_nombre=esp_nombre;
    this.informacionEspecialidad.esp_estado=esp_estado;


   }

}
