import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormsBuilderService } from 'src/app/core/services/forms-builder.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.page.html',
  styleUrls: ['./registrar-cliente.page.scss'],
})
export class RegistrarClientePage implements OnInit {

  //ATRIBUTOS
  clienteForm:FormGroup;

  constructor(
   private formsBuilderService : FormsBuilderService,
   private storage: Storage
  ) { }

  ngOnInit() {
  this.clienteForm = this.formsBuilderService.getClienteBuilder();
  }

  saveCliente(){
    this.storage.set("clientes", [this.clienteForm.value])
    console.log('asdas')
  }

}
