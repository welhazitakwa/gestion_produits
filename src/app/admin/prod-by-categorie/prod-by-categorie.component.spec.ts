import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByCategorieComponent } from './prod-by-categorie.component';

describe('ProdByCategorieComponent', () => {
  let component: ProdByCategorieComponent;
  let fixture: ComponentFixture<ProdByCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdByCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
