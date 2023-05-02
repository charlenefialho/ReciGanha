import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postos-de-coleta',
  templateUrl: './postos-de-coleta.component.html',
  styleUrls: ['./postos-de-coleta.component.css']
})
export class PostosDeColetaComponent implements OnInit {

  showImage: boolean = false;

  search(){
    this.showImage = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
