import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaPage } from './agua.page';

describe('AguaPage', () => {
  let component: AguaPage;
  let fixture: ComponentFixture<AguaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
