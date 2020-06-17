import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: [
    './dropdown.component.css',
    'bigger-devices.css'
  ]
})
export class DropdownComponent implements OnInit {
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.opened = !this.opened
    // console.log(this.opened)
  }
}
