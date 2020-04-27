import { shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IBusyState {
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorService {

  private readonly busyStateSubject: BehaviorSubject<IBusyState> = new BehaviorSubject(null);
  public readonly busyState$: Observable<IBusyState> = this.busyStateSubject.asObservable().pipe(
    shareReplay(1),
  );

  constructor() { }

  public openBusyIndicator(busyState: IBusyState) {
    this.busyStateSubject.next(busyState);
  }

  public closeBusyIndicator() {
    this.busyStateSubject.next(null);
  }

}
