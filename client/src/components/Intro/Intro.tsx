import React from 'react'
import './Intro.scss';

// const viopfp = require('./introimgs/viopfphex3.png');

export default function Intro() {
	return (
		<div className="introWrapper">

			<div className='introHeader'>
				<h1>Two minds, many projects</h1>
			</div>

			<div className='cardWrapper'>

				<div className='jason top card'>
					<div className='leftWrapper'>
						<div className='name bold'>Jason Ngo</div>
						<img className='pfp' alt='icon' src={ require('./introimgs/viopfphex3.png') }></img>
					</div>
					<div className='rightWrapper'>
						<div className='description title bold'>
							React.js Front End Developer // SQL and noSQL Back End Developer
							</div>
						<div className='education lh-2'>
							UC Berkeley Extension // Web Development Bootcamp // Nov 2021 - March 2022
						</div>
						<div className='education lh-2'>
							Findmingo // Remote Front End Developer // March 2022 - Present
						</div>
						<div className='skillWrapper lh-2'>
							<div className='skillRow lh-2'>
								<div className='skillName'>Javascript</div>
								<div className='progressBarWrapper'>
									<div className='barBackground'>​</div>
									<div className='barProgress'>​</div>
									<div className='barNumber bold'>80%</div>
								</div>
							</div>
							<div className='skillRow lh-2'>
								<div className='skillName'>React/Vue</div>
								<div className='progressBarWrapper'>
									<div className='barBackground'>​</div>
									<div className='barProgress'>​</div>
									<div className='barNumber bold'>80%</div>
								</div>
							</div>
							<div className='skillRow lh-2'>
								<div className='skillName'>Databases</div>
								<div className='progressBarWrapper'>
									<div className='barBackground'>​</div>
									<div className='barProgress'>​</div>
									<div className='barNumber bold'>80%</div>
								</div>
							</div>

						</div>
					</div>

				</div>





				<div className='vio bottom card'>
				<div className='leftWrapper'>
						<div className='name bold'>Elias Fischl</div>
						<img className='pfp' alt='icon' src={ require('./introimgs/viopfphex3.png') }></img>
					</div>
					<div className='rightWrapper'>
						<div className='description title bold'>
							Data Science // Machine Learning
							</div>
						<div className='education lh-2'>
							UC Berkeley // Applied Mathematics BA // Class of Fall 2020
						</div>
						<div className='education lh-2'>
							University of Denver, CO // Data Science Master's // March 2022 - Present
						</div>
						<div className='skillWrapper lh-2'>
							<div className='skillRow lh-2'>
								<div className='skillName'>Javascript</div>
								<div className='progressBarWrapper'>
									<div className='barBackground'>​</div>
									<div className='barProgress'>​</div>
									<div className='barNumber bold'>80%</div>
								</div>
							</div>
							<div className='skillRow lh-2'>
								<div className='skillName'>React/Vue</div>
								<div className='progressBarWrapper'>
									<div className='barBackground'>​</div>
									<div className='barProgress'>​</div>
									<div className='barNumber bold'>80%</div>
								</div>
							</div>
							<div className='skillRow lh-2'>
								<div className='skillName'>Databases</div>
								<div className='progressBarWrapper'>
									<div className='barBackground'>​</div>
									<div className='barProgress'>​</div>
									<div className='barNumber bold'>80%</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>

		</div>
	)
}

// <img className="icon" alt="" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"/>
// <iframe src="https://vio-eli.github.io/modular_decordle/"></iframe>