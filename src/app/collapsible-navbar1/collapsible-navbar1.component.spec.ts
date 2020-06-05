import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleNavbar1Component } from './collapsible-navbar1.component';

describe('CollapsibleNavbar1Component', () => {
  let component: CollapsibleNavbar1Component;
  let fixture: ComponentFixture<CollapsibleNavbar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleNavbar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleNavbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
