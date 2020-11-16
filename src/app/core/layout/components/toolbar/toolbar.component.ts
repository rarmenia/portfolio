import { FirestoreService } from '@shared/services/firestore.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Profile } from '@shared/models/profile/profile.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  @Input() sidenavTarget: MatSidenav | undefined = undefined;

  profileInfo?: Profile;
  profileInfo$: Observable<Profile | undefined> = this.fs.profile$.pipe(
    tap((profileInfo: Profile | undefined) => this.profileInfo = profileInfo)
  );

  constructor(
    private fs: FirestoreService,
  ) { }

  ngOnInit(): void {

  }

  public toggleSidenav(): void {
    if (this.sidenavTarget) {
      this.sidenavTarget.toggle();
    }
  }

}
