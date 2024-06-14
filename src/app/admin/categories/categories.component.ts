import { Component } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { AddEditCatComponent } from '../add-edit-cat/add-edit-cat.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor (private dialog: MatDialog) {}

  openAddEditCatForm(){
    this.dialog.open(AddEditCatComponent) ;
  }

}
