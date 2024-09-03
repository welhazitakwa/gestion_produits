import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { LandingComponent } from './client/landing/landing.component';
import { LoginComponent } from './admin/login/login.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProdByCategorieComponent } from './admin/prod-by-categorie/prod-by-categorie.component';
import { CategorieProduitComponent } from './client/categorie-produit/categorie-produit.component';
import { ProduitCategoriesClientComponent } from './client/produit-categories-client/produit-categories-client.component';
import { SignupComponent } from './admin/signup/signup.component';
import { adminGuard, usersGuard } from './admin/users.guard';
import { ProfileComponent } from './admin/profile/profile.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import { ProfileuserComponent } from './client/profileuser/profileuser.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { EditprofileuserComponent } from './client/editprofileuser/editprofileuser.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'prodById', component: ProdByCategorieComponent },
  { path: 'produitsClt', component: CategorieProduitComponent },
  { path: 'ByCategorie', component: ProduitCategoriesClientComponent },
  // ******************************************************************//
  { path: 'register', component: SignupComponent },
  { path: 'adduser', component: AdduserComponent, canActivate: [adminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [usersGuard] },
  { path: 'profileuser',component: ProfileuserComponent, canActivate: [usersGuard],  },
  { path: 'update/:id',component: UpdateuserComponent, canActivate: [adminGuard],},
  { path: 'updateprofileuser/:id',component: EditprofileuserComponent},
  { path: 'layout', component: LayoutComponent, canActivate: [adminGuard] },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
