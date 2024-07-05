import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.css'],
})
export class CategorieProduitComponent implements OnInit {
  getData: any[] = [];
  prodByCat: any;

  constructor(
    private categorieService: CategorieService,
    private router: Router,
    private shared: SharedService
  ) {}
  ngOnInit(): void {
    this.getCategoriesList();
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
  getProductsOfCateory(id: number) {
    this.categorieService.getProductsOfCategorie(id).subscribe({
      next: (res) => {
        this.prodByCat = res;
        console.log(this.prodByCat);
        this.shared.setMessage(this.prodByCat);
        this.shared.setIdcat(id);
        this.router.navigateByUrl(`/ByCategorie`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
