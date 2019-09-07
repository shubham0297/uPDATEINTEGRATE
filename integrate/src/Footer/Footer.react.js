import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './Footer.css';

const Footer = () => {

    return (
        <div class="footer-distributed">

			<div class="footer-left">

				<h3>Veri<span>Life</span></h3>

				<p class="footer-links">
					.
					<a href="#">Home</a><br></br>
					·
					<a href="#">Blood Banks</a><br></br>
					·
					<a href="#">Donation Camp</a><br></br>
					·
					<a href="#">About</a><br></br>
					·
					<a href="#">Login</a><br></br>
					·
					<a href="#">Contact</a><br></br>
				</p>

				<p class="footer-company-name">Verizon India &copy; 2019</p>
			</div>

			<div class="footer-center">
            
			<p>
			    <span>Contact Us</span>
				</p>
				
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span> SIDCO Industrial Estate, Guindy</span>Chennai, Tamil Nadu 600032</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>8056266354</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">verilife@verizon.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About Us</span>
					VeriLife is Blood Bank Management System (BBMS) which aims to provide transparency in making the process of obtaining blood from a blood bank hassle free and corruption free and make the system of blood bank management effective.
					
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</div>
    );

}

export default Footer;