import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css'],
})
export class AddEditCatComponent {
  catForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.catForm = fb.group({
      nom: '',
      description: '',
    });
  }

  onFormSubmit() {
    if (this.catForm.valid) {
      console.log(this.catForm.value)
    }
  }
}
