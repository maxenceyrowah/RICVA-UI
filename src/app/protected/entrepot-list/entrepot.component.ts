import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EntrrepotsService } from 'src/app/@core/services/entrepots/entrrepots.service';
import { DialogBoxComponent } from 'src/app/@shared/components';
import { ENTREPOT_MODULE } from 'src/app/@shared/import.module';

@Component({
    selector: 'app-entrepot',
    templateUrl: './entrepot.component.html',
    styleUrls: ['./entrepot.component.scss'],
    standalone: true,
    imports: [...ENTREPOT_MODULE],
})
export class EntrepotComponent implements OnInit {
  breadcrumbs = 'Tableau de bord > Administrateur';
  displayedEntrepotsColumns: string[] = [
    'Libelle',
    'Superficie m2',
    'Latitude',
    'Longitude',
    'Placer',
    'Actions',
  ];
  loading = true;
  entrepots: any[] = [];
  dialogBox: any = {};
  title = 'Historiques des entrepôts'

  constructor(
    private entrepotService: EntrrepotsService,
    public dialog: MatDialog,
  ) {}

  getEntrepots() {
    return this.entrepotService.getEntrepots().subscribe((entrepots) => {
      this.entrepots = entrepots;
    });
  }

  deleteEntrepot(entrepotId: string) {
    this.dialogBox = {
      title: 'Voulez-vous supprimer ? ',
      type: 'DELETE',
      description: '',
      confirm: true,
    };

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '645px',
      height: '330px',
      disableClose: true,
      data: this.dialogBox,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.entrepotService.deleteEntrepot(entrepotId);
    });
  }

  ngOnInit() {
    this.getEntrepots();
  }
}
