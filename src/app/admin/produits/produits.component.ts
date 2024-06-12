import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent {
  constructor(private router: Router) {}
  logoImage = '/public/logo.jpg';
 }
