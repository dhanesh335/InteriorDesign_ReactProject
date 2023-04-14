import React from 'react'
import './App.css'

function App() {
  return (
    <div>

	<div className="banner">
		<div className="navbar">
			<div className="logo"><h1 className="">!NTERIOR</h1></div>
			<ul>
				<li><a href="banner2">Home</a></li>
				<li><a href="#">Bedroom</a></li>
				<li><a href="#">Dining</a></li>
				<li><a href="#">Kitchen</a></li>
				<li><a href="#">Backyard</a></li>
			</ul>
		</div>
		<div className="content">
			<h1>DESIGN YOUR HOUSE</h1>
			<p>Design your dream home effortlessly and have fun. Intuitive and easy to use, <br/>with HomeByMe create your floor plan in 2D and furnish your home in 3D with real brand named furnitures</p>
		</div>
	</div>
	<br/>
	<div className="banner2">
		<img src="https://media.designcafe.com/wp-content/uploads/2020/02/21011053/black-bedroom-design-768x512.jpg" height="100vh" width="100%"/>

	</div>
	<br/>
	<div className="banner3">
		
	</div>
	<br/>
	<div className="banner4">
		
	</div>
	<br/>
	<div className="banner5">
		
	</div>
	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="footer-col">
					<h4>Services</h4>
					<ul>
						<li><a href="#">Desgining</a></li>
						<li><a href="#">Remodeling</a></li>
						<li><a href="#">Painting</a></li>
						<li><a href="#">Carpenting</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>GetHelp?</h4>
					<ul>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Shipping</a></li>
						<li><a href="#">Returns</a></li>
						<li><a href="#">Contact </a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Legal</h4>
					<ul>
						<li><a href="#">Terms&Conditions</a></li>
						<li><a href="#">Pravicy Policy</a></li>
						<li><a href="#">Our Services</a></li>
						<li><a href="#">Support</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Fallow Us</h4>
					<div className="social-links">
						<a href="#"><i className="fab fa-google"></i></a>
						<a href="#"><i className="fab fa-instagram"></i></a>
						<a href="#"><i className="fab fa-twitter"></i></a>
						<a href="#"><i className="fab fa-facebook-f"></i></a>
					</div>
				</div>
			</div>
			
		</div>
		<br/>
		<hr/>
		<marquee>
		<center><p className="copy">@Copy-right 2019-2022 It was developed by Dhanesh.Sravanam <br/>
			Ph no.9573423877,7799423877
		</p></center>
	    </marquee>
	</footer>



   </div>
  )
}

export default App