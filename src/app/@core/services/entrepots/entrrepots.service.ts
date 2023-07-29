import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';

import { Entrepot } from '../../models/entrepots';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EntrrepotsService {
  private firestore;

  constructor(private router: Router) {
    this.firestore = inject(Firestore);
  }

  postEntrepot(data: Entrepot) {
    const newCollection = doc(collection(this.firestore, 'entrepots'));
    return setDoc(newCollection, { ...data, id: newCollection.id })
      .then(() => {
        this.router.navigate(['/app/dashboard/entrepot']);
      })
      .catch((err) => {
        console.log('[] error:', err);
      });
  }

  getEntrepots() {
    const newCollection = collection(this.firestore, 'entrepots');
    return collectionData(newCollection);
  }

  deleteEntrepot(firebaseDocumentId: string) {
    const newCollection = doc(
      this.firestore,
      `/entrepots/${firebaseDocumentId}`
    );
    return deleteDoc(newCollection)
      .then(() => {
        this.getEntrepots();
      })
      .catch((error) => {
        console.log('[] error:', error);
      });
  }

  putEntrepot(firebaseDocumentId: string, data: any) {
    const newCollection = doc(
      this.firestore,
      `/entrepots/${firebaseDocumentId}`
    );
    return updateDoc(newCollection, data)
      .then(() => {
        this.router.navigate(['/app/dashboard/entrepot']);
      })
      .catch((error) => {
        console.log('[] error:', error);
      });
  }
}
