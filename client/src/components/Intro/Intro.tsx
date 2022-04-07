import React from 'react'
import './Intro.scss';

export default function Intro() {
  return (
    <div className="introWrapper">
      <div className="left">
        <div className='top-left'>
          <div className="hexagon"/>
          <img className="icon" alt="" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"/>
        </div>

        <div className='middle-right'>
          <div className='hexagon' />
        </div>

        <div className='bottom-left'>
          <div className='hexagon' />
        </div>

      </div>

      <div className='right'>

      </div>

    </div>
  )
}
