import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCategoriesClientComponent } from './produit-categories-client.component';

describe('ProduitCategoriesClientComponent', () => {
  let component: ProduitCategoriesClientComponent;
  let fixture: ComponentFixture<ProduitCategoriesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitCategoriesClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitCategoriesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
