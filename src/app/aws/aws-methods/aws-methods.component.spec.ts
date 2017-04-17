import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsMethodsComponent } from './aws-methods.component';

describe('AwsMethodsComponent', () => {
  let component: AwsMethodsComponent;
  let fixture: ComponentFixture<AwsMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
