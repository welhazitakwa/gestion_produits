import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  imageUrl = 'assets/images/logoWithoutBg.png';

  navProd() {
    this.router.navigateByUrl('/produitsClt');
  }
}
