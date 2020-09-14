import { shareReplay, filter } from 'rxjs/operators';
import { Profile } from './../models/profile/profile.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private profileDoc: AngularFirestoreDocument<Profile | undefined> = this.afs.doc<Profile>('portfolio/profile');
  profile$: Observable<Profile | undefined> = this.profileDoc.valueChanges().pipe(
    shareReplay(1),
    filter((profile: Profile | undefined) => profile !== undefined)
  );

  constructor(
    private afs: AngularFirestore
  ) { }

}

