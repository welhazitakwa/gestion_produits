import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { AddEditCatComponent } from '../add-edit-cat/add-edit-cat.component';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({ 
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  // displayedColumns: string[] = ['nom', 'description', 'dateAjout', 'produits'];
  getData: any;
  constructor(
    private dialog: MatDialog,
    private categorieService: CategorieService
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
    this.categorieService.deleteCategorie(id).subscribe({
      next: (res) => {
        alert('Categorie supprimé avec succès !');
        this.getCategoriesList();
      },
      error: console.log,
    });
  }
  openEditCatForm( data : any ) {
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
}
