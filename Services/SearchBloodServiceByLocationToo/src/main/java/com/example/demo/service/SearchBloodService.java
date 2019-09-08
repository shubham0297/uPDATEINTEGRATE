package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.model.Donor;
import com.example.demo.repository.SearchBloodRepository;



@Service
public class SearchBloodService {

	@Autowired
	private CrudRepository<Donor, Integer> repo;
	
	
	public List<Donor> searchByBloodGroup(){
		SearchBloodRepository bloodRepo = (SearchBloodRepository) repo;
		return (List<Donor>) bloodRepo.findAll();
	}
	
	public List<Donor> searchByBloodGroupAndLocation(String bloodGroup,String location){
		SearchBloodRepository bloodRepo = (SearchBloodRepository) repo;
		return bloodRepo.findByBloodGroupAndCity(bloodGroup, location);
	}

	public Donor addDonorToDb(Donor donor) {
		SearchBloodRepository bloodRepo = (SearchBloodRepository) repo;
		return bloodRepo.save(donor);
	}

}
