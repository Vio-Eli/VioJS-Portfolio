import React from 'react';
import './Menu.scss';

interface MenuProps {
  menuOpen: boolean,
  setMenuOpen(menuOpen: boolean): void
}

export default function Menu(props: MenuProps) {

const onClickHandler = () => {
  props.setMenuOpen(false);
}

  return (
    <div className={"menuWrapper " + (props.menuOpen && "active")}>
      <ul>
        <li><a href="#" onClick={onClickHandler}>HOME</a></li>
        <li><a href="#" onClick={onClickHandler}>ABOUT</a></li>
        <li><a href="#" onClick={onClickHandler}>PROJECTS</a></li>
      </ul>
    </div>
  )
}
