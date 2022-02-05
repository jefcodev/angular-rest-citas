import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicoComponent } from './components/medico/medico.component';
import { HospitalComponent } from './components/hospital/hospital.component';
const routes: Routes = [
  {path:'paciente',component:PacienteComponent},
  {path:'medico',component:MedicoComponent},
  {path:'hospital',component:HospitalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
