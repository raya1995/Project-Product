import { Component, OnInit } from '@angular/core';
import { Produit } from '../produits';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProductComponent implements OnInit {

  produit: Produit = new Produit();
  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduit(){
    this.produitService.createProduit(this.produit).subscribe( data =>{
      console.log(data);
      this.goToProduitList();
    },
    error => console.log(error));
  }

  goToProduitList(){
    this.router.navigate(['/produits']);
  }
  
  onSubmit(){
    console.log(this.produit);
    this.saveProduit();
  }
}
