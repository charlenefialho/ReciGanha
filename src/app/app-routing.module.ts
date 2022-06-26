import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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
  {path:'cadastre-se', component:CadastroComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
