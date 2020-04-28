import { ProfileModel } from './../../models/profile.model';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { environment } from './../../../../environments/environment';
import { shareReplay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private profileDoc: AngularFirestoreDocument<ProfileModel> = this.afs.doc<ProfileModel>('portfolio/profile');
  profile$: Observable<ProfileModel> = this.profileDoc.valueChanges().pipe(
    shareReplay(1),
    tap(profile => {
      if (!environment.production) {
        console.log('DEV::CONSOLE -- Firebase Profile Response', profile);
      }
    })
  );

  constructor(private afs: AngularFirestore) { }

}
