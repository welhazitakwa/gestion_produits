import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { AddEditCatComponent } from '../add-edit-cat/add-edit-cat.component';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @ViewChild('productTableBody')
  productTableBodyRef!: ElementRef<HTMLTableSectionElement>;

  // displayedColumns: string[] = ['nom', 'description', 'dateAjout', 'produits'];
  getData: any[] = [];
  prodByCat: any;
  constructor(
    private dialog: MatDialog,
    private categorieService: CategorieService,
    private router: Router,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }
  openAddEditCatForm() {
    const dialogRef = this.dialog.open(AddEditCatComponent, { width: '550px' });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategoriesList();
        }
      },
      error: console.log,
    });
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
  deleteCategorie(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Cette Catégorie va être supprimé définitivement! ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-la!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categorieService.deleteCategorie(id).subscribe({
          next: (res) => {
            Swal.fire(
              'Supprimé!',
              'Votre Catégorie a été supprimé.',
              'success'
            );
            this.getCategoriesList();
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
    const dialogRef = this.dialog.open(AddEditCatComponent, {
      data,
      width: '550px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategoriesList();
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
  getProductsOfCateory(id: number) {
    this.categorieService.getProductsOfCategorie(id).subscribe({
      next: (res) => {
        this.prodByCat = res;
        console.log(this.prodByCat);
        this.shared.setMessage(this.prodByCat);
        this.shared.setIdcat(id);
        this.router.navigateByUrl(`/prodById`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
  // navProdByCat(id: number) {
  //   this.prodByCat = this.getProductsOfCateory(id);

  //   console.log(this.prodByCat);
  //   //this.router.navigateByUrl(`/prodById`); // Naviguer vers une route avec l'ID de la catégorie
  // }
}
