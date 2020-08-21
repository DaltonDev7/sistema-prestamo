import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarClientePageRoutingModule } from './registrar-cliente-routing.module';

import { RegistrarClientePage } from './registrar-cliente.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarClientePageRoutingModule,
    ComponentModule
  ],
  declarations: [RegistrarClientePage]
})
export class RegistrarClientePageModule {}
