import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { LandingComponent } from './client/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { CategorieProduitComponent } from './client/categorie-produit/categorie-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    LandingComponent,
    SidebarComponent,
    CategoriesComponent,
    ProduitsComponent,
    CategorieProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
