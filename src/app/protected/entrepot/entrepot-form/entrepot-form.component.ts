import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-entrepot-form',
  templateUrl: './entrepot-form.component.html',
  styleUrls: ['./entrepot-form.component.scss']
})
export class EntrepotFormComponent {
  breadcrumbs: string = 'Tableau de bord > Administatrion > Operation > Créer un entrepot';

  EntrepotCreationForm = this.formBuilder.group({
    libelle: [''],
    longitude: [0],
    superficie: [0],
    lattitude: [0],
    placer: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    const { lattitude, libelle, longitude, superficie, placer } = this.EntrepotCreationForm.value;

    const dataForm = {
      lattitude,
      longitude,
      libelle,
      superficie,
      placer
    }
    console.log("🚀 ~ file: entrepot-form.component.ts:32 ~ EntrepotFormComponent ~ submit ~ dataForm:", dataForm)
  }
}
