import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { AddEditProduitComponent } from '../add-edit-produit/add-edit-produit.component';
import Swal from 'sweetalert2';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  @ViewChild('productTableBody')
  productTableBodyRef!: ElementRef<HTMLTableSectionElement>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private produitService: ProduitService,
    private categorieService: CategorieService
  ) {}
  logoImage = '/public/logo.jpg';

  getData: any[] = [];

  ngOnInit(): void {
    this.getProduitsList();
  }
  openAddEditProdForm() {
    const dialogRef = this.dialog.open(AddEditProduitComponent, {
      width: '550px',
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
  // getProduitsList() {
  //   this.produitService.getProduits().subscribe({
  //     next: (res) => {
  //       // console.log(res);
  //       this.getData = res;
  //       console.log(this.getData);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  getProduitsList() {
    this.produitService.getProduits().subscribe({
      next: (res) => {
        this.getData = res;
        this.getData.forEach((produit) => {
          this.assignCategorieName(produit);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  assignCategorieName(produit: any) {
    this.produitService.getCategoryById(produit.categorie.id).subscribe({
      next: (categorie) => {
        produit.categorieNom = categorie.nom;
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
  ngAfterViewInit() {
    // Exécuter filterTable une fois que la vue est initialisée pour éviter les erreurs de 'null'
    this.filterTable('');
  }
  filterTable(searchText: string) {
    searchText = searchText.toLowerCase().trim();
    const tableBody = this.productTableBodyRef.nativeElement;

    if (tableBody) {
      const rows = tableBody.getElementsByTagName('tr');

      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let showRow = false;

        for (let j = 0; j < cells.length; j++) {
          const cellContent = cells[j].textContent || cells[j].innerText;
          if (cellContent.toLowerCase().indexOf(searchText) > -1) {
            showRow = true;
            break;
          }
        }

        rows[i].style.display = showRow ? '' : 'none';
      }
    }
  }

}
