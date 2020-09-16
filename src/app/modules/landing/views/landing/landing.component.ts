import { AddressComponent } from './../../../../shared/models/utils/address-component.model';
import { Location } from './../../../../shared/models/utils/location.model';
import { tap } from 'rxjs/operators';
import { Profile } from './../../../../shared/models/profile/profile.model';
import { Observable } from 'rxjs';
import { FirestoreService } from './../../../../shared/services/firestore.service';
import { PathType, pathBuilder } from '@utils/path.helper';
import { LayoutStateService } from '@shared/services/layout-state.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [
  ]
})
export class LandingComponent implements OnInit, OnDestroy {

  profileInfo?: Profile;
  profileInfo$: Observable<Profile | undefined> = this.fs.profile$.pipe(
    tap((profileInfo: Profile | undefined) => this.profileInfo = profileInfo)
  );

  constructor(
    private layoutSvc: LayoutStateService,
    private fs: FirestoreService,
    private router: Router,
  ) { }

  public ngOnInit(): void {

    this.layoutSvc.updateLayoutState({
      hideToolbar: true
    });

    this.layoutSvc.updateContentBackground(
      `#fefefe url(${pathBuilder(PathType.LOCAL, ['assets', 'images', 'backgrounds', 'winooski.jpg'])}) no-repeat fixed center`
    );

  }

  public ngOnDestroy(): void {

    this.layoutSvc.clearContentBackground();
    this.layoutSvc.clearLayoutState();

  }

  public getFallbackIcon(): string {
    return '';
  }

  public getAge(): number | undefined{
    const birthday: Timestamp | undefined = this.profileInfo?.birthday;

    const birthdayMoment: moment.Moment = moment(birthday?.toDate() ?? new Date());

    return moment().diff(birthdayMoment, 'years') || undefined;

  }

  public getLocation(): string {
    const location: Location | undefined = this.profileInfo?.location;
    const addressComponents = location?.addressComponents ?? [];

    return addressComponents
      .filter((component: AddressComponent) =>  !component.types?.includes('locality'))
      .map((component: AddressComponent) => component.shortName).join(', ');
  }

  public handleNavClick(): void {
    this.router.navigate(['/', 'home']);
  }

}
