import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbaZonesComponent } from './fba-zones.component';

describe('FbaZonesComponent', () => {
  let component: FbaZonesComponent;
  let fixture: ComponentFixture<FbaZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbaZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbaZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
