import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsAccountsComponent } from './mws-accounts.component';

describe('MwsAccountsComponent', () => {
  let component: MwsAccountsComponent;
  let fixture: ComponentFixture<MwsAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
