import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './produit-list/produit-list.component';
import { CreateProductComponent } from './create-produit/create-produit.component';
import { UpdateProductComponent } from './update-produit/update-produit.component';
import { ProductDetailsComponent } from './produit-details/produit-details.component';

const routes: Routes = [
  {path: 'produits', component: ProductListComponent},
  {path: 'create-produit', component: CreateProductComponent},
  {path: '', redirectTo: 'produits', pathMatch: 'full'},
  {path: 'update-produit/:id', component: UpdateProductComponent},
  {path: 'produits-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
