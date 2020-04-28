import { Component, OnInit } from '@angular/core';
import { LayoutStateService } from '@shared/services/layout-state/layout-state.service';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  constructor(
    private layoutStateSvc: LayoutStateService,
  ) { }

  ngOnInit(): void {
    this.layoutStateSvc.updateLayoutState({
      displayHeader: false,
      displayLeftNav: false,
      displayFooter: true
    });
  }

}
