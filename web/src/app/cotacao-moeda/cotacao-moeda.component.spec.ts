import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoMoedaComponent } from './cotacao-moeda.component';

describe('CotacaoMoedaComponent', () => {
  let component: CotacaoMoedaComponent;
  let fixture: ComponentFixture<CotacaoMoedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoMoedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
