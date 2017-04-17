import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsGeneralComponent } from './aws-general.component';

describe('AwsGeneralComponent', () => {
  let component: AwsGeneralComponent;
  let fixture: ComponentFixture<AwsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
