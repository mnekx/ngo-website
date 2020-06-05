import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-img-slide',
  templateUrl: './header-img-slide.component.html',
  styleUrls: ['./header-img-slide.component.css']
})
export class HeaderImgSlideComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
