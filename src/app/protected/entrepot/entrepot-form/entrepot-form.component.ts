import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { EntrrepotsService } from 'src/app/@core/services/entrepots/entrrepots.service';

@Component({
  selector: 'app-entrepot-form',
  templateUrl: './entrepot-form.component.html',
  styleUrls: ['./entrepot-form.component.scss'],
})
export class EntrepotFormComponent implements OnInit {
  entrepotId: null = null;
  form: any = {};
  title: string = 'Créer un entrepôt';
  button: string = 'Enregistrer';
  breadcrumbs: string =
  'Tableau de bord > Administatrion > Operation > créer un entrepôt';

  constructor(
    private route: ActivatedRoute,
    private entrepotService: EntrrepotsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(
      (params) => (this.entrepotId = params['entrepotId'])
    );

    if (this.entrepotId) {
      this.breadcrumbs = 'Tableau de bord > Administatrion > Operation > Modification d\'un entrepot';
      this.title = `Modification d'un entrepot`;
      this.button = `Mettre a jour`;
      this.entrepotService.getEntrepots().subscribe((entrepot) => {
        const currentEntrepot: any = [...entrepot].find(
          (e) => e['id'] === this.entrepotId
        );
        this.form.patchValue(currentEntrepot);
      });
    }
  }

  submit() {
    const { lattitude, libelle, longitude, superficie, placer } =
      this.form.value;

    const dataForm: any = {
      lattitude,
      longitude,
      libelle,
      superficie,
      placer,
    };

    this.entrepotId
      ? this.entrepotService.putEntrepot(this.entrepotId, dataForm)
      : this.entrepotService.postEntrepot(dataForm);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      libelle: [null],
      longitude: [0],
      superficie: [0],
      lattitude: [0],
      placer: [null],
    });
  }
}
