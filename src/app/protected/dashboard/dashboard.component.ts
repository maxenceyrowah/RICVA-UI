import { Component } from '@angular/core';

import { SIDEBAR_MENU_CONFIG } from 'src/app/@core/models/constantes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  sideBarMennus = SIDEBAR_MENU_CONFIG;

}
