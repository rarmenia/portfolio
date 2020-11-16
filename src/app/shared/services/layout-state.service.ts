import { ILayoutState } from './../interfaces/state-management/layout-state.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, startWith, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  private readonly layoutStateSubject: BehaviorSubject<ILayoutState> = new BehaviorSubject({});
  public readonly layoutState$: Observable<ILayoutState> = this.layoutStateSubject.asObservable().pipe(
    shareReplay(1),
    startWith({}),
    delay(0)
  );

  private readonly contentBackgroundSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public readonly contentBackground$: Observable<string | null> = this.contentBackgroundSubject.asObservable().pipe(
    shareReplay(1),
    startWith(null),
    delay(0)
);

  constructor() { }

  public updateLayoutState(newState: ILayoutState): void {
    this.layoutStateSubject.next(newState);
  }

  public clearLayoutState(): void {
    this.layoutStateSubject.next({});
  }

  public updateContentBackground(newBackground: string): void {
    this.contentBackgroundSubject.next(newBackground);
  }

  public clearContentBackground(): void {
    this.contentBackgroundSubject.next(null);
  }

}
