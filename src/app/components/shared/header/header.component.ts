import { Component, OnInit } from '@angular/core';
import { HeaderDataService } from './header-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(private headerService: HeaderDataService) {

  }

  get title(): string {
    return this.headerService.headerData.title
  }


  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

}
