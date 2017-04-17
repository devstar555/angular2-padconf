import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqsGeneralComponent } from './sqs-general.component';

describe('SqsGeneralComponent', () => {
  let component: SqsGeneralComponent;
  let fixture: ComponentFixture<SqsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
