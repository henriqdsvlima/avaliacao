import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderDataService } from '../header/header-data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, AppRoutingModule],
})
export class NavComponent {

  constructor(private router: Router, private headerService: HeaderDataService) {

  }
}
