import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsAccountsComponent } from './aws-accounts.component';

describe('AwsAccountsComponent', () => {
  let component: AwsAccountsComponent;
  let fixture: ComponentFixture<AwsAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
