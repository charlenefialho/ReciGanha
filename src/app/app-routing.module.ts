import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { PontosComponent } from './components/pontos/pontos.component';
import { PostosDeColetaComponent } from './components/postos-de-coleta/postos-de-coleta.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sobre', component:SobreComponent},
  {path:'postos-de-coleta', component:PostosDeColetaComponent},
  {path:'parceiros', component:ParceirosComponent},
  {path:'pontos', component:PontosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
