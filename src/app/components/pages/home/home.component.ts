import { HeaderDataService } from './../../shared/header/header-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(headerData:HeaderDataService) {
    headerData.headerData = {
      title: 'Início - Gerenciamento de Usuários',
      routeUrl: ''
    };
  }
  ngOnInit(): void {

  }

}
