import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { LandingComponent } from './client/landing/landing.component';
import { LoginComponent } from './admin/login/login.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { CategoriesComponent } from './admin/categories/categories.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
