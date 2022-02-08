import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  public text: string = 'Este es un texto de prueba';

  public date: Date = new Date();
}
