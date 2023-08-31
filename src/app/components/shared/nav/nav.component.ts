import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  active:boolean = false
  openSidebar() {
    document.querySelector(".sidebar")?.classList.toggle("hidden");
    this.active
  }
}
