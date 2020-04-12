import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { UnderConstructionRoutingModule } from './under-construction-routing.module';
import { UnderConstructionComponent } from './views/under-construction/under-construction.component';


@NgModule({
  declarations: [UnderConstructionComponent],
  imports: [
    CommonModule,
    UnderConstructionRoutingModule,
    MatCardModule
  ]
})
export class UnderConstructionModule { }
