import { Component, OnInit } from '@angular/core';
import { Produit } from '../produits'
import { ProduitService } from '../produit.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProductListComponent implements OnInit {

  produits: Produit[];

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(){
    this.produitService.getProduitsList().subscribe(data => {
      this.produits = data;
    });
  }

  produitsDetails(id: number){
    this.router.navigate(['produits-details', id]);
  }

  updateProduit(id: number){
    this.router.navigate(['update-produit', id]);
  }

  deleteProduits(id: number){
    this.produitService.deleteProduit(id).subscribe( data => {
      console.log(data);
      this.getProduits();
    })
  }
}
