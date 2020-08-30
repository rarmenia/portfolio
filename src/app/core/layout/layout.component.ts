import { LayoutStateService } from './../../shared/services/layout-state.service';
import { ILayoutState } from './../../shared/interfaces/state-management/layout-state.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  layoutState$: Observable<ILayoutState> = this.layoutSvc.layoutState$;

  contentBackground$: Observable<string | null> = this.layoutSvc.contentBackground$.pipe(
    tap((background: string | null) => this.contentBackground = background),
  );
  contentBackground: string | null = null;

  constructor(
    private layoutSvc: LayoutStateService
  ){ }

  ngOnInit(): void {
  }
}
