package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Donor;

@Repository
public interface DonorRepository extends CrudRepository<Donor, Integer> {

}
