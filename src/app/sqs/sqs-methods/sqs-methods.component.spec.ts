import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqsMethodsComponent } from './sqs-methods.component';

describe('SqsMethodsComponent', () => {
  let component: SqsMethodsComponent;
  let fixture: ComponentFixture<SqsMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqsMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqsMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
