import React from 'react'

interface MenuProps {
  menuOpen: boolean,
  setMenuOpen(menuOpen: boolean): void
}


export default function Menu(props: MenuProps) {
  return (
    <div className={"Menu " + (props.menuOpen && "active")}>
      <div>word thing</div>
      </div>
  )
}
