import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutTrackerComponent } from './fut-tracker.component';

describe('FutTrackerComponent', () => {
  let component: FutTrackerComponent;
  let fixture: ComponentFixture<FutTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
