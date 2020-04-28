import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NarrativeRoutingModule } from './narrative-routing.module';
import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [UnderConstructionComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    NarrativeRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class NarrativeModule { }
