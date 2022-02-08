import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public allSales: number = 12312312.345;
  public percent: number = 0.5;
}
