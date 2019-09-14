import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeFisicaPage } from './atividade-fisica.page';

describe('AtividadeFisicaPage', () => {
  let component: AtividadeFisicaPage;
  let fixture: ComponentFixture<AtividadeFisicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeFisicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
