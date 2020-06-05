import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-navbar1',
  templateUrl: './collapsible-navbar1.component.html',
  styleUrls: ['./collapsible-navbar1.component.css', './big-devices.css']
})
export class CollapsibleNavbar1Component implements OnInit {

  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
