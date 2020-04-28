import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  info$: Observable<any> = this.fs.info$;

  constructor(
    private fs: FirestoreService
  ) { }

  ngOnInit(): void {
  }

}
