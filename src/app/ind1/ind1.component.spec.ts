import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ind1Component } from './ind1.component';

describe('Ind1Component', () => {
  let component: Ind1Component;
  let fixture: ComponentFixture<Ind1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ind1Component]
    });
    fixture = TestBed.createComponent(Ind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
