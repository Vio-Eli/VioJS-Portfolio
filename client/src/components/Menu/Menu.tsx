import React from 'react';
import './Menu.scss';

interface MenuProps {
  menuOpen: boolean,
  setMenuOpen(menuOpen: boolean): void
}


export default function Menu(props: MenuProps) {
  return (
    <div className={"menuWrapper " + (props.menuOpen && "active")}>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PROJECTS</a></li>
      </ul>
    </div>
  )
}
