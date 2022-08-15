import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {

  icon1: string = 'assets/Consultar Pontos/Icon1.png'
  icon2: string = 'assets/Consultar Pontos/Icon2.png'
  icon3: string = 'assets/Consultar Pontos/Icon3.png'
  logo: string = 'assets/Consultar Pontos/Logo.png'
  imgPrev: string = 'assets/Consultar Pontos/Previa Consulta.png'

  constructor() { }

  ngOnInit(): void {
  }

}
