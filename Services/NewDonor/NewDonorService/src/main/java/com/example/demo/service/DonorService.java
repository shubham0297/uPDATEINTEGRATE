package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.model.Donor;
import com.example.demo.repository.DonorRepository;

@Service
public class DonorService {

	@Autowired
	private CrudRepository<Donor, Integer> repo;
	
	public Donor addDonorToDb(Donor entity) {
		return repo.save(entity);
	}
	
	
	public  List<Donor> findAllDonors() {
		return (List<Donor>) repo.findAll();
	}

	public Optional<Donor> getDonorByIdFromDb(int id) {
		 return repo.findById(id);
	}
	
	public String deleteDonorFromDB(int id) {
		String result = "NO DONOR WITH THIS ID FOUND";
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			result = "DONOR SUCCESFULLY DELETED";
		}
		return result;
	}
	
	
}
