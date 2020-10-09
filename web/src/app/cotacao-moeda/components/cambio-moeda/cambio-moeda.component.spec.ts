import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioMoedaComponent } from './cambio-moeda.component';

describe('CambioMoedaComponent', () => {
  let component: CambioMoedaComponent;
  let fixture: ComponentFixture<CambioMoedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioMoedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
