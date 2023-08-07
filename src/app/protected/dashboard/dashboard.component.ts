import { Component } from '@angular/core';

import { SIDEBAR_MENU_CONFIG } from 'src/app/@core/models/constantes';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, NgFor, RouterLink, RouterOutlet]
})
export class DashboardComponent {
  sideBarMennus = SIDEBAR_MENU_CONFIG;
  logo = '../../../assets/img/logo_dsh.png';

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
