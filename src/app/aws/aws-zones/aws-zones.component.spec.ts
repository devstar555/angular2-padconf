import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsZonesComponent } from './aws-zones.component';

describe('AwsZonesComponent', () => {
  let component: AwsZonesComponent;
  let fixture: ComponentFixture<AwsZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
