import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public tgg: boolean = false; //state inicial es FALSE

  get toggle() {
    console.log('toggle');
    return (this.tgg = !this.tgg); //cambie el valor que esta por dentro de esa variable
  }
}
