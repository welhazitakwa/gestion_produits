import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { LandingComponent } from './client/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { CategorieProduitComponent } from './client/categorie-produit/categorie-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditCatComponent } from './admin/add-edit-cat/add-edit-cat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import { AddEditProduitComponent } from './admin/add-edit-produit/add-edit-produit.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    LandingComponent,
    SidebarComponent,
    CategoriesComponent,
    ProduitsComponent,
    CategorieProduitComponent,
    AddEditCatComponent,
    AddEditProduitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
