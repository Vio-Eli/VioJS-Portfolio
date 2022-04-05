import React from 'react';
import './Menu.scss';

interface MenuProps {
  menuOpen: boolean,
  setMenuOpen(menuOpen: boolean): void
}


export default function Menu(props: MenuProps) {
  return (
    <div className={"menuWrapper " + (props.menuOpen && "active")}>
      <div>word thing</div>
      </div>
  )
}
