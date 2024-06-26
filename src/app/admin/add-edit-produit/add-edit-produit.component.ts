import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-produit',
  templateUrl: './add-edit-produit.component.html',
  styleUrls: ['./add-edit-produit.component.css'],
})
export class AddEditProduitComponent implements OnInit {
  getData: any;
  prodForm: FormGroup;
  constructor(
    private categorieService: CategorieService,
    private fb: FormBuilder,
    private produitService: ProduitService,
    private diagRef: MatDialogRef<AddEditProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.prodForm = fb.group({
      nom: '',
      image: '',
      prix: 0,
      quantite: 0,
      description: '',
      categorie: this.fb.group({
        id: null,
      }),
    });

  }
  ngOnInit(): void {
    this.categorieService.getCategories().subscribe({
      next: (res) => {
        this.getData = res;
        console.log('Catégories chargées:', this.getData);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.prodForm.patchValue(this.data);
    // console.log('****************8888***********************');
    // console.log(this.getData);
    // console.log('****************8888***********************');
  }

  validatePositiveValue(event: any): void {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  onFormSubmit() {
    if (this.prodForm.valid) {
      // console.log(this.prodForm.value)
      if (this.data) {
        this.produitService
          .editProduit(this.data.id, this.prodForm.value)
          .subscribe({
            next: (val: any) => {
               Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Le produit a été modifié avec succès!',
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
        this.produitService.addProduit(this.prodForm.value).subscribe({
          next: (val: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Le produit a été ajouté avec succès!',
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
              "Une erreur est survenue lors de la l'ajout.",
              'error'
            );
          },
        });
      }
    }
  }
}
