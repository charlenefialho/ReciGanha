import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Header2Component } from './template/header2/header2.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PostosDeColetaComponent } from './components/postos-de-coleta/postos-de-coleta.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { PontosComponent } from './components/pontos/pontos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Header2Component,
    SobreComponent,
    PostosDeColetaComponent,
    ParceirosComponent,
    PontosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
