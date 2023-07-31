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
import { ToastrService } from 'ngx-toastr';

import { Entrepot } from '../../models/entrepots';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EntrrepotsService {
  private firestore;
  private entrepotUpdateMsg: string = 'L\'entrepôt a été mis à jour avec succès.';
  private entrepotCreateMsg: string = 'L\'entrepôt a été créé avec succès.';
  private entrepotDeleteMsg: string = 'L\'entrepôt a été supprimé avec succès.';
  private firebasCollectionPath: string = 'entrepots';

  constructor(private router: Router, private toastr: ToastrService) {
    this.firestore = inject(Firestore);
  }

  postEntrepot(data: Entrepot) {
    const newCollection = doc(collection(this.firestore, 'entrepots'));
    return setDoc(newCollection, { ...data, id: newCollection.id })
      .then(() => {
        this.toastr.success(this.entrepotCreateMsg);
        this.router.navigate(['/app/dashboard/entrepot']);
      })
      .catch((err) => {
        this.toastr.warning(err?.message);
      });
  }

  getEntrepots() {
    const newCollection = collection(this.firestore, this.firebasCollectionPath);
    return collectionData(newCollection);
  }

  deleteEntrepot(firebaseDocumentId: string) {
    const newCollection = doc(
      this.firestore,
      `/${this.firebasCollectionPath}/${firebaseDocumentId}`
    );
    return deleteDoc(newCollection)
      .then(() => {
        this.toastr.success(this.entrepotDeleteMsg);
        this.getEntrepots();
      })
      .catch((error) => {
        this.toastr.warning(error?.message);
      });
  }

  putEntrepot(firebaseDocumentId: string, data: any) {
    const newCollection = doc(
      this.firestore,
      `/${this.firebasCollectionPath}/${firebaseDocumentId}`
    );
    return updateDoc(newCollection, data)
      .then(() => {
        this.toastr.success(this.entrepotUpdateMsg);
        this.router.navigate(['/app/dashboard/entrepot']);
      })
      .catch((error) => {
        this.toastr.warning(error?.message);
      });
  }
}
