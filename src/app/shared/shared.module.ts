import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './components/busy-indicator/busy-indicator.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [BusyIndicatorComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
  ],
  exports: [
    AngularFirestoreModule
  ]
})
export class SharedModule { }
