package com.example.demo.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Donor;
import com.example.demo.service.SearchBloodService;

@RestController
public class SearchBloodController {

	@Autowired
	private SearchBloodService service;
	
	@PostMapping(value = "/addDonor", produces = "application/json", consumes = "application/json")
	public Donor addDonor(@RequestBody Donor donor) {
		return this.service.addDonorToDb(donor);
	}
	
	@GetMapping("/search")
	@CrossOrigin(origins = "http://localhost:3000")
	List<Donor> searchDonorByBloodGroup(){
		return service.searchByBloodGroup();
	}
	
	
	@GetMapping("/search/{blood_group}/{location}")
	@CrossOrigin(origins = "http://localhost:3000")
	List<Donor> searchDonorByBloodGroupAndLocation(@PathVariable("blood_group") String bloodGroup,@PathVariable("location") String location){
		return service.searchByBloodGroupAndLocation(bloodGroup, location);
	}	
}
