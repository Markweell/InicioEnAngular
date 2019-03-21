import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public usuario: string;
  constructor() { }

  ngOnInit() {
    this.usuario = 'Marcos Gallardo Pérez';
  }

}
