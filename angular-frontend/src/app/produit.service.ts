import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseURL = "http://localhost:8083/api/v1/produits";

  constructor(private httpClient: HttpClient) { }
  
  getProduitsList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}`);
  }

  createProduit(produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, produit);
  }

  getProduitById(id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/${id}`);
  }

  updateProduit(id: number, produit: Produit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, produit);
  }

  deleteProduit(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
