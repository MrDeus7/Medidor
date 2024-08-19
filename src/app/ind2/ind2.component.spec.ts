import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ind2Component } from './ind2.component';

describe('Ind2Component', () => {
  let component: Ind2Component;
  let fixture: ComponentFixture<Ind2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ind2Component]
    });
    fixture = TestBed.createComponent(Ind2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
