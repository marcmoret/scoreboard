import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl4Component } from './lvl4.component';

describe('Lvl4Component', () => {
  let component: Lvl4Component;
  let fixture: ComponentFixture<Lvl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lvl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
