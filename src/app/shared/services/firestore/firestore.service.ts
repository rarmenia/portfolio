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

  private infoDoc: AngularFirestoreDocument<any> = this.afs.doc<any>('portfolio/info');
  info$: Observable<any> = this.infoDoc.valueChanges().pipe(
    shareReplay(1),
    tap(info => {
      if (!environment.production) {
        console.log('DEV::CONSOLE -- Firebase Info Response', info);
      }
    })
  );

  constructor(private afs: AngularFirestore) { }

}
