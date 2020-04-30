import { SharedModule } from '@shared/shared.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-loaded-once.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

import { AngularFireModule } from '@angular/fire';

import 'firebase/firestore';
import { environment } from 'environments/environment';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftNavComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
