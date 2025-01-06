import React from 'react'

export default function Services() {
  return (
	<section className="service-section js-sticky-section" id= "service">
	<div className="row">
		<h2>SERVICES WE PROVIDE</h2>
		<p className= "little-description">We are working with both individuals and businesses from all over the globe 
			to create awesome websites and applications.</p>
	</div>
	<div className="row">
		<div className="col span_1_of_4 box">
			<img src="resources/img/flag.png" alt="flag" className="services-icon"/>
			<h3>Branding</h3>
			<p>Lorem ipsum dolor sit amet, 
				consectetuer adipiscing elit, sed diam nonummy nibh.</p>
		</div>
		<div className="col span_1_of_4 box">
			<img src="resources/img/crayon.png" alt="crayon" className="services-icon"/>
			<h3>Design</h3>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
				lorem ipsum  </p>
		</div>
		<div className="col span_1_of_4 box">
			<img src="resources/img/gears.png" alt="gears" className="services-icon"/>
			<h3>Development</h3>
			<p>At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium</p>
		</div>
		<div className="col span_1_of_4 box">
			<img src="resources/img/rocket.png" alt="rocket" className="services-icon"/>
			<h3>Rocket Science</h3>
			<p>LEt harum quidem rerum est et expedita distinctio. Nam libero tempore.</p>
		</div>
	</div>
</section>
  )
}
