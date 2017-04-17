import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbaGeneralComponent } from './fba-general.component';

describe('FbaGeneralComponent', () => {
  let component: FbaGeneralComponent;
  let fixture: ComponentFixture<FbaGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbaGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
