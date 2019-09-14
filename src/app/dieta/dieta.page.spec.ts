import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaPage } from './dieta.page';

describe('DietaPage', () => {
  let component: DietaPage;
  let fixture: ComponentFixture<DietaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
