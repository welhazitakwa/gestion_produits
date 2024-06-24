import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { AddEditProduitComponent } from '../add-edit-produit/add-edit-produit.component';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Ce produit va être supprimé définitivement!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.produitService.deleteProduit(id).subscribe({
          next: (res) => {
            Swal.fire('Supprimé!', 'Votre produit a été supprimé.', 'success');
            this.getProduitsList();
          },
          error: (err) => {
            Swal.fire(
              'Erreur!',
              'Une erreur est survenue lors de la suppression.',
              'error'
            );
          },
        });
      }
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
