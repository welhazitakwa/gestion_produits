import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formData: any = {
    name: '',
    email: '',
    password: '',
    role: 'USER',
    city: '',
  };
  errorMessage: string = '';

  constructor(
    private readonly userService: UsersService,
    private router: Router
  ) {}

  async handleSubmit() {
    // Check if all fields are not empty
      if (
        !this.formData.role
      ) {
        this.showError('roole a bay');
        return;
      }
    if (
      !this.formData.name ||
      !this.formData.email ||
      !this.formData.password ||
      !this.formData.role ||
      !this.formData.city
    ) {
      this.showError('Please fill in all fields.');
      return;
    }

    try {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0YWt3YUBnbWFpbC5jb20iLCJpYXQiOjE3MjUzNzEwODEsImV4cCI6MTcyNTQ1NzQ4MX0.Aq7-QDQn2Ei5UHDTG_AMq7SPwGgIyv8K78oGTwnykgI';
      const response = await this.userService.register(this.formData, token);
      if (response.statusCode === 200) {
         this.router.navigate(['/landing']);
      } else {
        this.showError(response.message);
      }
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = ''; // Clear the error message after the specified duration
    }, 3000);
  }

  // **********************************************************************

  onLogin() {
    this.router.navigateByUrl('/login');
  }
}
