import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-edit-produit',
  templateUrl: './add-edit-produit.component.html',
  styleUrls: ['./add-edit-produit.component.css'],
})
export class AddEditProduitComponent {
  prodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produitService: ProduitService,
    private diagRef: MatDialogRef<AddEditProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.prodForm = fb.group({
      nom: '',
      description: '',
    });
  }
  ngOnInit(): void {
    this.prodForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.prodForm.valid) {
      // console.log(this.prodForm.value)
      if (this.data) {
        // this.produitService
        //   .editCategorie(this.data.id, this.prodForm.value)
        //   .subscribe({
        //     next: (val: any) => {
        //       alert('La categorie était modifié avec succès');
        //       this.diagRef.close(true);
        //     },
        //     error: (err: any) => {
        //       console.error(err);
        //     },
        //   });
      } else {
    //     this.produitService.addCategorie(this.prodForm.value).subscribe({
    //       next: (val: any) => {
    //         alert('La categorie était envoyé avec succès');
    //         this.diagRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
      }
    }
  }
}
