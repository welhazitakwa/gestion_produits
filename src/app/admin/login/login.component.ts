import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
}
