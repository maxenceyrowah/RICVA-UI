import { Component } from '@angular/core';

import { SIDEBAR_MENU_CONFIG } from 'src/app/@core/models/constantes';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { DASHBOARD_MODULE } from 'src/app/@shared/import.module';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [...DASHBOARD_MODULE]
})
export class DashboardComponent {
  sideBarMennus = SIDEBAR_MENU_CONFIG;
  logo = '../../../assets/img/logo_dsh.png';

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
