import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css'],
})
export class AddEditCatComponent implements OnInit {
  catForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private categorieService : CategorieService, 
    private diagRef: MatDialogRef<AddEditCatComponent> ,
    @Inject (MAT_DIALOG_DATA) public data : any
  ) {
    this.catForm = fb.group({
      nom: '',
      description: '',
    });
  }
  ngOnInit(): void {
     this.catForm.patchValue(this.data)
  }

  onFormSubmit() {
    if (this.catForm.valid) {
     // console.log(this.catForm.value)
     if (this.data) {
      this.categorieService.editCategorie(this.data.id  ,this.catForm.value).subscribe({
        next: (val: any) => {
          alert('La categorie était modifié avec succès');
          this.diagRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
     } else {
        this.categorieService.addCategorie(this.catForm.value).subscribe({
          next: (val: any) => {
            alert('La categorie était envoyé avec succès');
            this.diagRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
     }
   
    }
  }

  
}
