import { SharedModule } from './../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './views/landing/landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
  ]
})
export class LandingModule { }
