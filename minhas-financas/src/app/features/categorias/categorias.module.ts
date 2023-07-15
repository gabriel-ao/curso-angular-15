import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListComponent } from './componentes/list/list.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MaterialModule
  ]
})
export class CategoriasModule { }
