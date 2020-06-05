import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImgSlideComponent } from './header-img-slide.component';

describe('HeaderImgSlideComponent', () => {
  let component: HeaderImgSlideComponent;
  let fixture: ComponentFixture<HeaderImgSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImgSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImgSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
