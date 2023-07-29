import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
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
    data.id = Date.now().toString();
    const newCollection = collection(this.firestore, 'entrepots');
    return addDoc(newCollection, data)
      .then(() => {
        this.router.navigate(['/dashboard/entrepot']);
      })
      .catch((err) => {
        console.log('[] error:', err);
      });
  }

  getEntrepots() {
    const newCollection = collection(this.firestore, 'entrepots');
    return collectionData(newCollection, { idField: newCollection.id });
  }

  deleteEntrepot(firebaseDocumentId: string) {
    const newCollection = doc(
      this.firestore,
      `/entrepots/${firebaseDocumentId}`
    );
    return deleteDoc(newCollection);
  }

  putEntrepot(firebaseDocumentId: string, data: any) {
    const newCollection = doc(
      this.firestore,
      `/entrepots/${firebaseDocumentId}`
    );
    return updateDoc(newCollection, data)
      .then(() => {
        this.router.navigate(['/dashboard/entrepot']);
      })
      .catch((error) => {
        console.log('[] error:', error);
      });
  }
}
