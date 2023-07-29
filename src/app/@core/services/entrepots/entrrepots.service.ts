import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore } from '@angular/fire/firestore';

import { Entrepot } from '../../models/entrepots';

@Injectable({
  providedIn: 'root'
})
export class EntrrepotsService {
  private firestore: Firestore;

  constructor() {
    this.firestore = inject(Firestore);
  }

  postEntrepot(entrepot: Entrepot) {}

  getEntrepots() {}

  deleteEntrepot(entrepot: Entrepot) {}

  putEntrepot() {}
}
