import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, startWith, delay } from 'rxjs/operators';
import { ILayoutState } from '../../models/layout-state.interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  private readonly layoutStateSubject: BehaviorSubject<ILayoutState> = new BehaviorSubject({});
  public readonly layoutState$: Observable<ILayoutState> = this.layoutStateSubject.asObservable().pipe(
    startWith({} as ILayoutState),
    delay(0),
    shareReplay(1)
  );

  constructor() { }

  public updateLayoutState(newState: ILayoutState): void {

    this.layoutStateSubject.next(newState);

  }

}
