import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  @Input() sidenavTarget: MatSidenav | undefined = undefined;

  constructor() { }

  ngOnInit(): void {

  }

  public toggleSidenav(): void {
    if (this.sidenavTarget) {
      this.sidenavTarget.toggle();
    }
  }

}
