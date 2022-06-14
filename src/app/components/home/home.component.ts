import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image1: string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  image2: string = "https://thumbs.dreamstime.com/b/dia-da-terra-do-ambiente-nas-m%C3%A3os-das-%C3%A1rvores-que-crescem-pl%C3%A2ntulas-bokeh-esverdeia-m%C3%A3o-f%C3%AAmea-fundo-guarda-%C3%A1rvore-no-gra-130247647.jpg"
  image3: string = "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="


  constructor() { }

  ngOnInit(): void {
  }

}
