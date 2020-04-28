import { LayoutStateService } from './../../../../shared/services/layout-state/layout-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private layoutStateSvc: LayoutStateService
  ) { }

  ngOnInit(): void {
    this.layoutStateSvc.updateLayoutState({
      displayHeader: false,
      displayLeftNav: false,
      displayFooter: true
    });
  }
}
