import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive/src';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    ReactiveFormsModule,
    NgxMaskModule,
    
  ]
})
export class ComponentModule { }
