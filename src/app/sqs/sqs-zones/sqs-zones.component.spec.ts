import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqsZonesComponent } from './sqs-zones.component';

describe('SqsZonesComponent', () => {
  let component: SqsZonesComponent;
  let fixture: ComponentFixture<SqsZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqsZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqsZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
