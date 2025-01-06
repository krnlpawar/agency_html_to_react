import React from 'react'

export default function Menu() {
	const links = ["Home", "Service", "Team", "Portfolio", "Testimonial", "Contact"]

  return (
	<header id= "home">
	<nav>
		<div className="row">
			<a href="#home">
				<img className="logo" src="resources/img/logo.png" alt="cuda"/>
			</a>
			<ul className= "main-nav">
				{
					links.map((link, index) => {
						return <li key={index} className= {index === 0 ? "active" : ""} ><a href={`#${link}`}>{link}</a></li>
					})
				}
			</ul>
		</div>
	</nav>
	<div className="row">
		<div className="hero-text-box">
			<h1>Hi there! We are the new kids on the block 
				and we build awesome websites and mobile apps.</h1>
				<a href="#" className= "btn btn-hero" >Work with us</a>
		</div>
	</div>
</header>
  )
}
