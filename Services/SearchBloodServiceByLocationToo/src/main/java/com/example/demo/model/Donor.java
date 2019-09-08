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
	public Donor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Donor(int donor_id, String donor_name, Date dob, String bloodGroup, String phone_number,
			char donor_availability, String email, Date effective_date, String address, String city, String state,
			String country, int zip) {
		super();
		this.donor_id = donor_id;
		this.donor_name = donor_name;
		this.dob = dob;
		this.bloodGroup = bloodGroup;
		this.phone_number = phone_number;
		this.donor_availability = donor_availability;
		this.email = email;
		this.effective_date = effective_date;
		this.address = address;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zip = zip;
	}
	public int getDonor_id() {
		return donor_id;
	}
	public void setDonor_id(int donor_id) {
		this.donor_id = donor_id;
	}
	public String getDonor_name() {
		return donor_name;
	}
	public void setDonor_name(String donor_name) {
		this.donor_name = donor_name;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public char getDonor_availability() {
		return donor_availability;
	}
	public void setDonor_availability(char donor_availability) {
		this.donor_availability = donor_availability;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getEffective_date() {
		return effective_date;
	}
	public void setEffective_date(Date effective_date) {
		this.effective_date = effective_date;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getZip() {
		return zip;
	}
	public void setZip(int zip) {
		this.zip = zip;
	} 
	   
}
