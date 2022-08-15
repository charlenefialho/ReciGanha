import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  notices: any[] = [
    {Image: 'assets/Noticias/cards/card1.jpeg', 
      Titulo: 'SPA Brsil e Boomera criam plataforma de economia circular',
      Data: '14/09/2020', 
      Descricao: 'A SAP Brasil e a Boomera, empresa que trabalha para reinserir resíduos no ciclo produtivo, anunciaram nesta segunda-feira, 14, uma parceria para o desenvolvimento de soluções que vão contribuir com…'},

    {Image: 'assets/Noticias/cards/card2.jpeg', 
      Titulo: 'Cidade de São Paulo proíbe o fornecimento de produtos descartáveis de plástico em estabelecimentos da cidade', 
      Data: '13/01.2020', 
      Descricao: 'O prefeito da cidade de São Paulo Bruno Covas, sancionou nesta segunda (13) a lei que proíbe que estabelecimentos  comerciais forneçam produtos descartáveis de plástico,'},

    {Image: 'assets/Noticias/cards/card3.jpeg', 
      Titulo: 'IMCI assina termo de cooperação técnica na gestão de resíduos com Secretaria de Desenvolvimento Urbano da Bahia', 
      Data: '21/08/2019', 
      Descricao: 'A Secretaria Estadual de Desenvolvimento Urbano (Sedur) da Bahia  assinou, nesta segunda-feira (20), um Termo de Cooperação Técnica , sem ônus, com o Instituto Movimento Cidades Inteligentes (IMCI)  para o tema…'},

    {Image: 'assets/Noticias/cards/card4.jpeg', 
      Titulo: 'Cuidado no manuceo dos resíduos nos tempos de quarentena', 
      Data: '25/03/2020', 
      Descricao: 'É tempo de se cuidar. A declaração de pandemia pela OMS (Organização Mundial de Saúde) do novo coronavírus fez com que mudássemos nossos hábitos de vida para nos prevenir da……'},

    {Image: 'assets/Noticias/cards/card5.jpeg', 
      Titulo: 'São Paulo recebe evento voltado para a gestão integrada de saneamento básico', 
      Data: '28/09/2018', 
      Descricao: 'Durante os dias 24 e 25 de setembro o Instituto Movimento Cidades inteligentes promoveu o evento “Saneamento para Cidades Inteligentes – Qualidade de Vida e Sustentabilidade”,que contou com a…'},

    {Image: 'assets/Noticias/cards/card6.jpeg', 
      Titulo: 'Burger King retira caixas de papelão do combo infantil em lojas de todo o Brasil', 
      Data: '05/12/2019', 
      Descricao: 'A rede de restaurantes Burger King anunciou na última quarta (4) que irá retirar as caixas de papelão do combo infantil a partir do mês de dezembro.'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
