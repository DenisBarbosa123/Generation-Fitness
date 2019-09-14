import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaPagePage } from './agua-page.page';

describe('AguaPagePage', () => {
  let component: AguaPagePage;
  let fixture: ComponentFixture<AguaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguaPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
