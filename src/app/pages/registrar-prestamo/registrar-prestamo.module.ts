import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPrestamoPageRoutingModule } from './registrar-prestamo-routing.module';

import { RegistrarPrestamoPage } from './registrar-prestamo.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPrestamoPageRoutingModule,
    ComponentModule
  ],
  declarations: [RegistrarPrestamoPage]
})
export class RegistrarPrestamoPageModule {}
