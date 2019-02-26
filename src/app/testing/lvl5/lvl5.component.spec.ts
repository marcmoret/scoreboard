import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl5Component } from './lvl5.component';

describe('Lvl5Component', () => {
  let component: Lvl5Component;
  let fixture: ComponentFixture<Lvl5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lvl5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
