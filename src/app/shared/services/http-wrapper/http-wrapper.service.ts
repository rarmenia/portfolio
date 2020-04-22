import { BusyIndicatorService } from './../busy-indicator/busy-indicator.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { IBusyState } from '../busy-indicator/busy-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  private readonly dataStore: { [key: string]: any } = {};

  constructor(
    private http: HttpClient,
    private busySvc: BusyIndicatorService
  ) { }

  public get<T>(dataId: string, busyIndicator: IBusyState | null, url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {

    if (busyIndicator) {
      this.busySvc.openBusyIndicator(busyIndicator);
    }

    return this.http.get<T>(url).pipe(
      tap(data => {
        this.dataStore[dataId] = data;

        if (busyIndicator) {
          this.busySvc.closeBusyIndicator();
        }
      }),
      shareReplay(1)
    );
  }

  public patch<T>(dataId: string, busyIndicator: IBusyState | null, url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {

    if (busyIndicator) {
      this.busySvc.openBusyIndicator(busyIndicator);
    }

    return this.http.patch<T>(url, body, options).pipe(
      tap(data => {
        this.dataStore[dataId] = data;

        if (busyIndicator) {
          this.busySvc.closeBusyIndicator();
        }
      }),
      shareReplay(1)
    );
  }

  public post<T>(dataId: string, busyIndicator: IBusyState | null, url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {

    if (busyIndicator) {
      this.busySvc.openBusyIndicator(busyIndicator);
    }

    return this.http.post<T>(url, body, options).pipe(
      tap(data => {
        this.dataStore[dataId] = data;

        if (busyIndicator) {
          this.busySvc.closeBusyIndicator();
        }
      })
    );
  }

  public put<T>(dataId: string, busyIndicator: IBusyState | null, url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {

    if (busyIndicator) {
      this.busySvc.openBusyIndicator(busyIndicator);
    }

    return this.http.put<T>(url, body, options).pipe(
      tap(data => {
        this.dataStore[dataId] = data;

        if (busyIndicator) {
          this.busySvc.closeBusyIndicator();
        }
      })
    );
  }


  public checkDataStore(dataId: string): any | undefined {

    return this.dataStore[dataId] !== null || undefined ?  this.dataStore[dataId] : undefined;

  }

  public removeFromDataStore(dataId: string) {
    delete this.dataStore[dataId];
  }

  public clearDataStore() {
    Object.keys(this.dataStore).forEach(key => this.removeFromDataStore(key));
  }

}
