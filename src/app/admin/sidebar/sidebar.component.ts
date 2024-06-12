import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}
  imageUrl = 'assets/images/logo.jpg';
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
