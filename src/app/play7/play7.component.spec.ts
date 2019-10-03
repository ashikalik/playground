import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Play7Component } from './play7.component';

describe('Play7Component', () => {
  let component: Play7Component;
  let fixture: ComponentFixture<Play7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Play7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
