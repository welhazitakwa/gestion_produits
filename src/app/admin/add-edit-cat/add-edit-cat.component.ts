import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

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
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'La Categorie été modifié avec succès !',
            }).then((result) => {
              if (result.isConfirmed) {
                this.diagRef.close(true); // Assurez-vous d'avoir une référence correcte à votre dialogue (diagRef)
              }
            });
           this.diagRef.close(true);
        },
        error: (err: any) => {
           Swal.fire(
             'Erreur!',
             'Une erreur est survenue lors de la modification.',
             'error'
           );
        },
      });
     } else {
        this.categorieService.addCategorie(this.catForm.value).subscribe({
          next: (val: any) => {
             Swal.fire({
               icon: 'success',
               title: 'Succès',
               text: 'La Catégorie été ajouté avec succès!',
             }).then((result) => {
               if (result.isConfirmed) {
                 this.diagRef.close(true); 
               }
             });
            this.diagRef.close(true);
          },
          error: (err: any) => {
            Swal.fire(
              'Erreur!',
              "Une erreur est survenue lors de l'ajout .",
              'error'
            );
          },
        });
     }
   
    }
  }

  
}
