import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteformComponent } from './estudianteform/estudianteform.component';
import { EstudiantetableComponent } from './estudiantetable/estudiantetable.component';
import { EstudianteComponent } from './estudiante.component';


@NgModule({
  declarations: [
    EstudianteformComponent, 
    EstudiantetableComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
