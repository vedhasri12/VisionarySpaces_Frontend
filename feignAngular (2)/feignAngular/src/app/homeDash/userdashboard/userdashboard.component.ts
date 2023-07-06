import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  isSidenavOpen = true;
  isNavbarOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  onSidenavToggle(event: any) {
    this.isSidenavOpen = event;
  }
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
