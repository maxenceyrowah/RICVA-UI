import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { EntrrepotsService } from 'src/app/@core/services/entrepots/entrrepots.service';
import { NgIf, NgClass } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-entrepot-form',
    templateUrl: './entrepot-form.component.html',
    styleUrls: ['./entrepot-form.component.scss'],
    standalone: true,
    imports: [
        MatButtonModule,
        RouterLink,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        NgClass,
    ],
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
      this.breadcrumbs =
        "Tableau de bord > Administatrion > Operation > Modification d'un entrepot";
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
      libelle: [null, [Validators.required]],
      longitude: [
        0,
        [
          Validators.required,
          Validators.pattern(/^[-]?((1[0-7]|[1-9])?\d(\.\d+)?|180(\.0+)?)$/),
        ],
      ],
      superficie: [0, [Validators.required, Validators.required, Validators.pattern(/^\d+(\.\d+)?$/), Validators.min(0)]],
      lattitude: [
        0,
        [
          Validators.required,
          Validators.pattern(/^[-]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/),
        ],
      ],
      placer: [null],
    });
  }
}
