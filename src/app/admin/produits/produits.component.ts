import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { AddEditProduitComponent } from '../add-edit-produit/add-edit-produit.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private produitService: ProduitService
  ) {}
  logoImage = '/public/logo.jpg';

  getData: any;

  ngOnInit(): void {
    this.getProduitsList();
  }
  openAddEditProdForm() {
    const dialogRef = this.dialog.open(AddEditProduitComponent, { width: '550px' });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProduitsList();
        }
      },
      error: console.log,
    });
  }
  getProduitsList() {
    this.produitService.getProduits().subscribe({
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
  deleteProduit(id: number) {
    this.produitService.deleteProduit(id).subscribe({
      next: (res) => {
        alert('Produit supprimé avec succès !');
        this.getProduitsList();
      },
      error: console.log,
    });
  }
  openEditCatForm(data: any) {
    const dialogRef = this.dialog.open(AddEditProduitComponent, {
      data,
      width: '650px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProduitsList();
        }
      },
      error: console.log,
    });
  }
}
