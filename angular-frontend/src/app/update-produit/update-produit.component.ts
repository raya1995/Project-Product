import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produits';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  produit: Produit = new Produit();
  constructor(private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produitService.getProduitById(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.produitService.updateProduit(this.id, this.produit).subscribe( data =>{
      this.gotoProduitsList();
    }
    , error => console.log(error));
  }

  gotoProduitsList(){
    this.router.navigate(['/produits']);
  }
}
