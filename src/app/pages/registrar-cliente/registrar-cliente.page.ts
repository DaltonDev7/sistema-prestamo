import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormsBuilderService } from 'src/app/core/services/forms-builder.service';

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
  ) { }

  ngOnInit() {
  this.clienteForm = this.formsBuilderService.getClienteBuilder();
  }

  saveCliente(){
    console.log('asdas')
  }

}
