import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial7Component } from './tutorial7.component';

describe('Tutorial7Component', () => {
  let component: Tutorial7Component;
  let fixture: ComponentFixture<Tutorial7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tutorial7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
