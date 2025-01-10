import React from 'react'

export default function Testimonial() {
  return (
	<section className="testimonial-section" id="testimonial">
	<div className="row">
		<h2>What People say about us</h2>
		<p className="little-description">Our clients love us!</p>
	</div>
	<div className="row">
		<div className="col span_1_of_2 box">
			<div className="client-photo">
				<img src="resources/img/1.jpg" alt="Chanel Iman"/>
			</div>
			<div className="client-review">
				<p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</p>
				<h3>Chanel Iman</h3>
				<span className="role">Ceo of Pinterest</span>
			</div>
		</div>
		<div className="col span_1_of_2 box">
			<div className="client-photo">
				<img src="resources/img/2.jpg" alt="ADRIANA LIMA"/>
			</div>
			<div className="client-review">
				<p>“Vivamus  luctus luctus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta"</p>
				<h3>ADRIANA LIMA</h3>
				<span className="role">Founder of Instagram</span>
			</div>
		</div>
		<div className="col span_1_of_2 box">
			<div className="client-photo">
				<img src="resources/img/3.jpg" alt="ANNE HATHAWAY"/>
			</div>
			<div className="client-review">
				<p>“Vivamus luctus urna sed urna luctus luctus  ultricies ac tempor dui sagittis. In condimentum facilisis porta.”</p>
				<h3>ANNE HATHAWAY</h3>
				<span className="role">Lead Designer at Behance</span>
			</div>
		</div>
		<div className="col span_1_of_2 box">
			<div className="client-photo">
				<img src="resources/img/4.jpg" alt="Chanel Iman"/>
			</div>
			<div className="client-review">
				<p>“Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus </p>
				<h3>EMMA STONE</h3>
				<span className="role">Co-Founder of Shazam</span>
			</div>
		</div>
	</div>
</section>
  )
}
