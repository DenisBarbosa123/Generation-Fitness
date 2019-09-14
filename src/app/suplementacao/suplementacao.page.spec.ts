import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementacaoPage } from './suplementacao.page';

describe('SuplementacaoPage', () => {
  let component: SuplementacaoPage;
  let fixture: ComponentFixture<SuplementacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplementacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplementacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
