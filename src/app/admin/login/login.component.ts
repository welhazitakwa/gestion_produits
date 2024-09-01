import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(
    private readonly usersService: UsersService,
    private router: Router
  ) {}

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  async handleSubmit() {
    if (!this.email || !this.password) {
      this.showError('Email et Mot de Passe sont Obligatoires ! ');
      return;
    }

    try {
      const response = await this.usersService.login(this.email, this.password);
      if (response.statusCode == 200) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        if (response.role == "ADMIN"){
          this.router.navigate(['/layout']);
        } else {
          this.router.navigate(['/landing']);
        }
      } else {
        // this.showError("données invalides !");
        this.showError(response.message);
      }
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = '';
    }, 6000);
  }

  onSignup() {
    this.router.navigateByUrl('/register');
  }
}
