import { Component, OnInit } from '@angular/core';
import { Produit } from '../produits';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number
  produit: Produit
  constructor(private route: ActivatedRoute, private produiService: ProduitService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];

    this.produit = new Produit();
    this.produiService.getProduitById(this.id).subscribe( data => {
      this.produit = data;
    });
  }

}
