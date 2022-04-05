import React from 'react'

interface TopBarProps {
    menuOpen: boolean,
    setMenuOpen(menuOpen: boolean): void
}

export default function Topbar(props: TopBarProps) {

    const burgerHandler = () => {
        props.setMenuOpen(!props.menuOpen);
    }

    return (
        <div className={ "topbar " + (props.menuOpen && "active") }>
            <div className="burger" onClick={ burgerHandler }>
                burger
            </div>
        </div>
    )
}
