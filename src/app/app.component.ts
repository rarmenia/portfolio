import { LayoutStateService } from './shared/services/layout-state/layout-state.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ILayoutState } from './shared/models/layout-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  layoutState: ILayoutState = null;
  layoutState$: Observable<ILayoutState> = this.layoutStateSvc.layoutState$;

  constructor(
    private layoutStateSvc: LayoutStateService,
  ) { }


}
