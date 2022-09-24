import React, { useEffect } from 'react';
import Background from '../../components/Backgound/Background';
import './Home.scss'
import Title from '../../components/Title/Title';
import Intro from '../../components/Intro/Intro';
import Projects from '../../components/Projects/Projects';
import createScrollSnap from '../../utils/scroller';

export default function Home() {

  useEffect(() => {
    const container = document.querySelector('.Scroller') as HTMLElement;
    container.scrollTop = 0;

    const { bind, unbind } = createScrollSnap(
      container,
      {
        snapDestinationY: '100%',
        timeout: 30,
        duration: 300,
        threshold: 0.05,
        easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
      },
    )

    ;(window as any).unbind = unbind
    ;(window as any).bind = bind
  }, []);

  return (
    <div className="Scroller">
      <div className="Item">
        < Title />
      </div>

      <div className="Item">
        < Intro />
      </div>

      <div className="Item">
        < Projects />
      </div>
    </div>
  )
}

