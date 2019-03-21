import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public interpolacion: string;
  public url: string;
  public activo: boolean;
  public mensajeButton1: string;
  public mensajeButton2: string;
  constructor() {}

  ngOnInit() {
    this.interpolacion = 'Interpolación de String';
    this.url = 'https://github.com/Markweell/InicioEnAngular';
    this.activo = false;
    this.mensajeButton1 = 'activado';
    this.mensajeButton2 = 'desactivado';
  }
  intercambiar() {
    if (this.activo) {
      this.activo = false;
      this.mensajeButton1 = 'activado';
      this.mensajeButton2 = 'desactivado';
    } else {
      this.activo = true;
      this.mensajeButton2 = 'activado';
      this.mensajeButton1 = 'desactivado';
    }
  }
}
