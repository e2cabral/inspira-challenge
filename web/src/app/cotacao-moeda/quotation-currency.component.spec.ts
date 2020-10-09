import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationCurrencyComponent } from './quotation-currency.component';

describe('CotacaoMoedaComponent', () => {
  let component: QuotationCurrencyComponent;
  let fixture: ComponentFixture<QuotationCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
