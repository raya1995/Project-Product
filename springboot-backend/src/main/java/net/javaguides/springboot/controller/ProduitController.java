package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Produit;
import net.javaguides.springboot.repository.ProduitRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ProduitController {

	@Autowired
	private ProduitRepository produitRepository;
	
	// get all employees
	@GetMapping("/produits")
	public List<Produit> getAllProducts(){
		return produitRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/produits")
	public Produit createEmployee(@RequestBody Produit produit) {
		return produitRepository.save(produit);
	}
	
	// get employee by id rest api
	@GetMapping("/produits/{id}")
	public ResponseEntity<Produit> getProductById(@PathVariable Long id) {
		Produit produit = produitRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("produit not exist with id :" + id));
		return ResponseEntity.ok(produit);
	}
	
	// update employee rest api
	
	@PutMapping("/produits/{id}")
	public ResponseEntity<Produit> updateEmployee(@PathVariable Long id, @RequestBody Produit produitDetails){
		Produit produit = produitRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		produit.setNom(produitDetails.getNom());
		produit.setPrix_unitaire(produitDetails.getPrix_unitaire());
		produit.setQuantite(produitDetails.getQuantite());
	
		
		Produit updatedProduit = produitRepository.save(produit);
		return ResponseEntity.ok(updatedProduit);
	}
	
	// delete employee rest api
	@DeleteMapping("/produits/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduit(@PathVariable Long id){
		Produit produit = produitRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("produit not exist with id :" + id));
		
		produitRepository.delete(produit);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
