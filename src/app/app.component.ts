import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'app.big-devices.css']
})
export class AppComponent {
  title = 'company-site';
  approach = 'health'

  constructor(private renderer: Renderer2) { }

  changeAproachTxt(el: HTMLElement) {
    console.log(el.id)
    if (el.id === 'appr1') {
      this.approach = 'health';
    }
    if (el.id === 'appr2') {
      this.approach = 'markets'
    }
    if (el.id === 'appr3') {
      this.approach = 'livelihood'
    }
    if (el.id === 'appr4') {
      this.approach = 'environment'
    }
    if (el.id === 'appr5') {
      this.approach = 'capacity'
    }
    if (el.id === 'appr6') {
      this.approach = 'governance'
    }
  }
}
