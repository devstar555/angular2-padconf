import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsZonesComponent } from './mws-zones.component';

describe('MwsZonesComponent', () => {
  let component: MwsZonesComponent;
  let fixture: ComponentFixture<MwsZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwsZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
