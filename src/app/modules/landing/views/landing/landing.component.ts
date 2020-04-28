import { ProfileModel } from '@shared/models/profile.model';
import { LayoutStateService } from '@shared/services/layout-state/layout-state.service';
import { Observable } from 'rxjs';
import { Component, OnInit, } from '@angular/core';
import { FirestoreService } from '@shared/services/firestore/firestore.service';
import { tap } from 'rxjs/operators';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '@shared/utils/animations/fade-animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn())
  ]
})
export class LandingComponent implements OnInit {

  profile: ProfileModel = null;
  profile$: Observable<ProfileModel> = this.fs.profile$.pipe(
    tap(data => {
      this.profile = data;
      this.todayIsBirthday = this.isTodayBirthday();

    })
  );

  todayIsBirthday = false;

  constructor(
    private fs: FirestoreService,
    private layoutStateSvc: LayoutStateService,
  ) { }

  ngOnInit(): void {
    this.layoutStateSvc.updateLayoutState({
      displayHeader: false,
      displayFooter: true,
      displayLeftNav: false
    });
  }

  isTodayBirthday(): boolean {
    const today = new Date();
    const birthday = this.profile.birthday.toDate();

    return today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

  }

}
