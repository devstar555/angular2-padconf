import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbaAccountsComponent } from './fba-accounts.component';

describe('FbaAccountsComponent', () => {
  let component: FbaAccountsComponent;
  let fixture: ComponentFixture<FbaAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbaAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbaAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
