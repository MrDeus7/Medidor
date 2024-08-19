import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ind3Component } from './ind3.component';

describe('Ind3Component', () => {
  let component: Ind3Component;
  let fixture: ComponentFixture<Ind3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ind3Component]
    });
    fixture = TestBed.createComponent(Ind3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
