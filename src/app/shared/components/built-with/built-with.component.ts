import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-with',
  templateUrl: './built-with.component.html',
  styleUrls: ['./built-with.component.scss']
})
export class BuiltWithComponent implements OnInit {

  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
