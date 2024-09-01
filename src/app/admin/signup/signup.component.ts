import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}
  onLogin() {
    if (
      this.loginObj.username == 'admin' &&
      this.loginObj.password == '112233'
    ) {
      this.router.navigateByUrl('/layout');
    } else if (
      this.loginObj.username == 'client' &&
      this.loginObj.password == '112233'
    ) {
      this.router.navigateByUrl('/landing');
    } else {
      alert('Vous devez verifier vos données');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
