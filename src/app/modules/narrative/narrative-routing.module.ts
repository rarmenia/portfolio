import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-not-found'
  },
  {
    path: 'page-not-found',
    redirectTo: 'under-construction'
  },
  {
    path: 'under-construction',
    component: UnderConstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarrativeRoutingModule { }
