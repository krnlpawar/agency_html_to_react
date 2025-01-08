import React from 'react'

export default function Skill() {
  return (
	<section className="skill-section" id="skill">l
	<div className="row">
		<h2>WE GOT SKILLS!</h2>
		<p className="little-description">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.
		</p>
	</div>
	<div className="row">
		<div className="col span_1_of_4 box">
			<svg className="radial-progress web-design" data-percentage="90" viewBox="0 0 80 80">
				<circle className="incomplete" cx="40" cy="40" r="35"></circle>
				<circle className="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;"></circle>
				<text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
			  </svg>
			  <h3>web Design</h3>
		</div>
		<div className="col span_1_of_4 box">
			<svg className="radial-progress html-css" data-percentage="70" viewBox="0 0 80 80">
				<circle className="incomplete" cx="40" cy="40" r="35"></circle>
				<circle className="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;"></circle>
				<text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">70%</text>
			  </svg>
			  <h3>Html / Css</h3>
		</div>
		<div className="col span_1_of_4 box">
			<svg className="radial-progress graphics-design" data-percentage="75" viewBox="0 0 80 80">
				<circle className="incomplete" cx="40" cy="40" r="35"></circle>
				<circle className="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;"></circle>
				<text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">75%</text>
			  </svg>
			  <h3>Graphics design</h3>
		</div>
		<div className="col span_1_of_4 box">
			<svg className="radial-progress ui-ux" data-percentage="85" viewBox="0 0 80 80">
				<circle className="incomplete" cx="40" cy="40" r="35"></circle>
				<circle className="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;"></circle>
				<text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">85%</text>
			  </svg>
			  <h3>Ui / Ux</h3>
		</div>
	</div>
</section>
  )
}
