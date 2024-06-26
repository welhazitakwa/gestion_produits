import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProduitComponent } from '../add-edit-produit/add-edit-produit.component';

@Component({
  selector: 'app-prod-by-categorie',
  templateUrl: './prod-by-categorie.component.html',
  styleUrls: ['./prod-by-categorie.component.css'],
})
export class ProdByCategorieComponent implements OnInit {
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

  getProductsOfCateory(id: number) {
   
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
