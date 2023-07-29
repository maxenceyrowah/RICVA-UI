import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EntrrepotsService } from 'src/app/@core/services/entrepots/entrrepots.service';
import { DialogBoxComponent } from 'src/app/@shared/components';

@Component({
  selector: 'app-entrepot',
  templateUrl: './entrepot.component.html',
  styleUrls: ['./entrepot.component.scss'],
})
export class EntrepotComponent implements OnInit {
  breadcrumbs: string = 'Tableau de bord > Administrateur';
  displayedEntrepotsColumns: string[] = [
    'Libelle',
    'Superficie m2',
    'Placer',
    'Actions',
  ];
  entrepots: any[] = [];
  dialogBox: any = {};

  constructor(
    private entrepotService: EntrrepotsService,
    public dialog: MatDialog
  ) {}

  getEntrepots() {
    return this.entrepotService.getEntrepots().subscribe((entrepots) => {
      this.entrepots = entrepots;
    });
  }

  deleteEntrepot(entrepotId: string) {
    this.dialogBox = {
      title: 'Voulez-vous vraiment supprimer cette entrepôt',
      type: 'DELETE',
      description: '',
      confirm: true,
    };

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '645px',
      height: '310px',
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
