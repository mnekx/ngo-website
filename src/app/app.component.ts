import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company-site';

  constructor(private renderer: Renderer2) { }

  changeAproachTxt(el: ElementRef) {
    console.log(el)
  }
}
