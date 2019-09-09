package com.example.demo.model;

import lombok.Data;
import lombok.Getter;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name ="DD" )
public class Donor {

	   @Id
	   @GeneratedValue
	   private int donor_id ;						//int(10);  SHOULD BE STRING  AND VARCHAR
	   private String donor_name;   				//varchar(30) DEFAULT NULL,
	   private Date dob ;							// date DEFAULT NULL,
	   private String bloodGroup;					// varchar(10) DEFAULT NULL,
	   private String phone_number ;				// mediumtext,
	   private char donor_availability ;			// tinyint(1) DEFAULT NULL,		SHOULD BE boolean and 
	   private String email;						// varchar(30) DEFAULT NULL,
	   private Date effective_date;			
	   private String address;
	   private String city;
	   private String state;
	   private String country;
	   private int zip; 
}
