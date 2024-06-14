import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css'],
})
export class AddEditCatComponent {
  catForm: FormGroup;
  constructor(private fb: FormBuilder, private categorieService : CategorieService, private diagRef: DialogRef<AddEditCatComponent> ) {
    this.catForm = fb.group({
      nom: '',
      description: '',
    });
  }

  onFormSubmit() {
    if (this.catForm.valid) {
     // console.log(this.catForm.value)
     this.categorieService.addCategorie(this.catForm.value).subscribe({
      next : (val: any) => {
          alert ("La categorie était envoyé avec succès") ;
          this.diagRef.close() ;
      } ,
      error : (err : any)=>{
        console.error(err)
      }
     });
    }
  }
}
