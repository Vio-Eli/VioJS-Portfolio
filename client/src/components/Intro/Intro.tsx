import React from 'react'
import './Intro.scss';

// const viopfp = require('./introimgs/viopfphex3.png');

export default function Intro() {
	return (
		<div className="introWrapper">
			<div className="introHeader">Two Minds, Many Projects
				<div className='introSubHeader'>- Code, Code, and more Code</div>
			</div>
			<div className="intros">

				<div className="intro jason">
					<div className="pfpBox">
						<img className="pfp" src={require('./introimgs/viopfphex3.png')} alt="" />
					</div>
					<div className="introBody">
						<div className="name">Jason
							<div className="motto">Racially Motivated</div>
						</div>
						<div className="bio">A Random Bio</div>
					</div>
				</div>

				<div className="intro eli">
					<div className="introBody">
						<div className="name">Eli
							<div className="motto">Coffee + Anime = Code</div>
						</div>
						<div className="bio">A Random Bio</div>
					</div>
					<div className="pfpBox">
						<img className="pfp" src={require('./introimgs/viopfphex3.png')} alt="" />
					</div>
				</div>

			</div>
		</div>
	)
}

// <img className="icon" alt="" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"/>
// <iframe src="https://vio-eli.github.io/modular_decordle/"></iframe>