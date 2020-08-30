import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@env';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';

import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class CoreModule {

  /**
   * Ensures the Module is only loaded once.
   *
   * @param parentModule the module
   */
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
