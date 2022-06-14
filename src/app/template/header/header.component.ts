import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo: string = "src/assets/Ellipse 8Logo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
