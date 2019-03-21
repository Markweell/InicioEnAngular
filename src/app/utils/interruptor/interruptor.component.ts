import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.sass']
})
export class InterruptorComponent implements OnInit {
public activo: boolean;
  constructor() { }

  ngOnInit() {
    this.activo = true;
  }

  intercambiar(): void {
    this.activo = !this.activo;
  }

}
