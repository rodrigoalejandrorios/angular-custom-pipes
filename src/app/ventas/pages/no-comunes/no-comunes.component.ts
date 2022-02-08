import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  constructor(private readonly primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    console.log(this.control);
    this.primengConfig.ripple = true;
  }

  public clients: number = 0;
  public control = {
    state: null,
    init: false,
  };
  public valor: string = 'texto';
  public genders: string = 'masculino';

  public initMapping = {
    femenino: 'Esta es una',
    masculino: 'Este es un',
  };

  public mapClients = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  plus() {
    this.clients = this.clients + 1;
  }
  minus() {
    if (this.clients === 0) {
      console.log(this.clients);
      this.clients = 1;
    }
    this.clients = this.clients - 1;
  }

  get activeState() {
    const vi = {
      ...this.control,
      init: true,
    };
    console.log(vi);
    return vi;
  }
}
