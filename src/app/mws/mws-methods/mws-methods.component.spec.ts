import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsMethodsComponent } from './mws-methods.component';

describe('MwsMethodsComponent', () => {
  let component: MwsMethodsComponent;
  let fixture: ComponentFixture<MwsMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwsMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
