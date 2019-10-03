import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Play10Component } from './play10.component';

describe('Play10Component', () => {
  let component: Play10Component;
  let fixture: ComponentFixture<Play10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Play10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
