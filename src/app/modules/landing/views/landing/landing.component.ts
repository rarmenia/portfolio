import { PathType, pathBuilder } from '@utils/path.helper';
import { LayoutStateService } from '@shared/services/layout-state.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [
  ]
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(
    private layoutSvc: LayoutStateService
  ) { }

  public ngOnInit(): void {

    this.layoutSvc.updateLayoutState({
      hideToolbar: true
    });

    this.layoutSvc.updateContentBackground(
      `#fefefe url(${pathBuilder(PathType.LOCAL, ['assets', 'images', 'backgrounds', 'winooski.jpg'])})`
    );
  }

  public ngOnDestroy(): void {
    this.layoutSvc.clearContentBackground();
    this.layoutSvc.clearLayoutState();
  }

}
