import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Play9Component } from './play9.component';

describe('Play9Component', () => {
  let component: Play9Component;
  let fixture: ComponentFixture<Play9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Play9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
