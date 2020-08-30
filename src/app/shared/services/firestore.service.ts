import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private profileDoc: AngularFirestoreDocument<any>

  constructor() { }
}
