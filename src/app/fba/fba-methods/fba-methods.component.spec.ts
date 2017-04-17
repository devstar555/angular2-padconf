import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbaMethodsComponent } from './fba-methods.component';

describe('FbaMethodsComponent', () => {
  let component: FbaMethodsComponent;
  let fixture: ComponentFixture<FbaMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbaMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbaMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
