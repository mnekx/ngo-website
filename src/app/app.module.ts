import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapsibleNavbar1Component } from './collapsible-navbar1/collapsible-navbar1.component';
import { HeaderImgSlideComponent } from './header-img-slide/header-img-slide.component';
import { DescribeDirective } from './directives/describe.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsibleNavbar1Component,
    HeaderImgSlideComponent,
    DescribeDirective,
    DropdownComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
