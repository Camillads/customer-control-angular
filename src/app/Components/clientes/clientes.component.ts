import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente';
import { ClienteDataService } from 'src/app/Services/cliente-data.service';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Observable<any>;

  constructor(private clienteService: ClienteService,
    private clienteDataService: ClienteDataService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getAll();
  }
  
  delete(key: string) {
    this.clienteService.delete(key);
  }

  edit(cliente: Cliente, key: string) {
    this.clienteDataService.changeCliente(cliente, key);
  }
}
