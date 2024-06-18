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
  getData : any ;
  constructor(
    private dialog: MatDialog,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }
  openAddEditCatForm() {
    this.dialog.open(AddEditCatComponent, {
      width: '550px',
    });
  }

  getCategoriesList() {
    this.categorieService.getCategories().subscribe({
      next: (res) => {
        // console.log(res);
        this.getData = res ;
       console.log( this.getData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
