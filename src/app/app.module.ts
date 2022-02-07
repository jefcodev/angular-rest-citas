import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PacienteComponent } from './components/paciente/paciente.component';
import { IgxDatePickerModule } from "igniteui-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MedicoComponent } from './components/medico/medico.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { CitasComponent } from './components/citas/citas.component';

import { EspecialidadComponent } from './components/especialidad/especialidad.component';


@NgModule({
  
  declarations: [
    AppComponent,
    PacienteComponent,
    MedicoComponent,
    HospitalComponent,
    EspecialidadComponent,
    CitasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IgxDatePickerModule,
    
   
  ],
  providers: [],
  bootstrap:[AppComponent],
  entryComponents: [],
  schemas: []
  
 
})
export class AppModule { }
