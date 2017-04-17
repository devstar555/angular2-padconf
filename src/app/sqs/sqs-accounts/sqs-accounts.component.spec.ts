import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqsAccountsComponent } from './sqs-accounts.component';

describe('SqsAccountsComponent', () => {
  let component: SqsAccountsComponent;
  let fixture: ComponentFixture<SqsAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqsAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
