import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private router: Router) {}
  logoImage = '/public/logo.jpg';
  navProduits() {
    this.router.navigateByUrl('/produits');
  }
  navCategories() {
    this.router.navigateByUrl('/categories');
  }
  navDash() {
    this.router.navigateByUrl('/layout');
  }
}
