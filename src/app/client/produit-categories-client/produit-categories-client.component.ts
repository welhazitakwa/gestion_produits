import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-produit-categories-client',
  templateUrl: './produit-categories-client.component.html',
  styleUrls: ['./produit-categories-client.component.css'],
})
export class ProduitCategoriesClientComponent {
  prodByCat: any[] = [];
  idcategorie: any;
  @ViewChild('productTableBody')
  productTableBodyRef!: ElementRef<HTMLTableSectionElement>;
  constructor(
    private shared: SharedService,
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private dialog: MatDialog
  ) {}
  getData: any[] = [];
  ngOnInit(): void {
    this.prodByCat = this.shared.getMessage();
    this.idcategorie = this.shared.getIdcat();
    console.log(this.prodByCat);
  }

  getCategoriesList() {
    this.categorieService.getCategories().subscribe({
      next: (res) => {
        // console.log(res);
        this.getData = res;
        console.log(this.getData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getProduitsList() {
    this.categorieService.getProductsOfCategorie(this.idcategorie).subscribe({
      next: (res) => {
        this.prodByCat = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProductsOfCateory(id: number) {}
}
