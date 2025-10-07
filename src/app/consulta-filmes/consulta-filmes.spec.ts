import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFilmes } from './consulta-filmes';

describe('ConsultaFilmes', () => {
  let component: ConsultaFilmes;
  let fixture: ComponentFixture<ConsultaFilmes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaFilmes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaFilmes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
