package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produits")
public class Produit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nom")
	private String nom;

	@Column(name = "prix_unitaire")
	private String prix_unitaire;
	
	@Column(name = "quantite")
	private String quantite;
	
	public Produit() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrix_unitaire() {
		return prix_unitaire;
	}

	public void setPrix_unitaire(String prix_unitaire) {
		this.prix_unitaire = prix_unitaire;
	}

	public String getQuantite() {
		return quantite;
	}

	public void setQuantite(String quantite) {
		this.quantite = quantite;
	}




	
	
}
