import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { ClienteDataService } from 'src/app/Services/cliente-data.service';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cliente: Cliente;
  key: string = '';

  constructor(private clienteService: ClienteService,
              private clienteDataService: ClienteDataService) { }

  ngOnInit(): void {
    debugger
    this.cliente = new Cliente();

    this.clienteDataService.currentCliente.subscribe(data => {
      if (data.cliente && data.key) {
        this.cliente = new Cliente();
        this.cliente.nome = data.cliente.nome;
        this.cliente.email = data.cliente.email;
        this.cliente.telefone = data.cliente.telefone;
        this.cliente.data_nascimento = data.cliente.data_nascimento;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    debugger
    if (this.key) {
      this.clienteService.update(this.cliente, this.key);
    }
    else {
      this.clienteService.insert(this.cliente);
    }

    this.cliente = new Cliente();
  }
}
