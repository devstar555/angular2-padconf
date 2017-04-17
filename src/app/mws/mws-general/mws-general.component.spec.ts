import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsGeneralComponent } from './mws-general.component';

describe('MwsGeneralComponent', () => {
  let component: MwsGeneralComponent;
  let fixture: ComponentFixture<MwsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
