import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-built-with',
  templateUrl: './built-with.component.html',
  styleUrls: ['./built-with.component.scss']
})
export class BuiltWithComponent implements OnInit {

  @Input() keepOpen: boolean;
  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
