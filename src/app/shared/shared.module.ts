import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './components/busy-indicator/busy-indicator.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BuiltWithComponent } from './components/built-with/built-with.component';

@NgModule({
  declarations: [
    BusyIndicatorComponent,
    BuiltWithComponent
  ],
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    AngularFirestoreModule,
  ],
  exports: [
    AngularFirestoreModule,
    MatIconModule,
    MatCardModule,
    BusyIndicatorComponent,
    BuiltWithComponent
  ]
})
export class SharedModule { }
