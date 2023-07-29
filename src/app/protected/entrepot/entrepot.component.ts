import { Component, OnInit } from '@angular/core';

import { EntrrepotsService } from 'src/app/@core/services/entrepots/entrrepots.service';

@Component({
  selector: 'app-entrepot',
  templateUrl: './entrepot.component.html',
  styleUrls: ['./entrepot.component.scss']
})
export class EntrepotComponent implements OnInit {
  breadcrumbs: string = 'Tableau de bord > Administrateur';
  displayedEntrepotsColumns: string[] = ['Libelle', 'Superficie m2', 'Placer', 'Actions'];
  entrepots: any[] = [];

  constructor(private entrepotService: EntrrepotsService) {}

  getEntrepots() {
    return this.entrepotService.getEntrepots().subscribe((entrepots) => {
      this.entrepots = entrepots;
    });
  }

  ngOnInit() {
    this.getEntrepots();
  }

}
