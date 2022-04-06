import React from 'react';
import './Topbar.scss';

interface TopBarProps {
    menuOpen: boolean,
    setMenuOpen(menuOpen: boolean): void
}

export default function Topbar(props: TopBarProps) {

    const burgerHandler = () => {
        props.setMenuOpen(!props.menuOpen);
    }

    return (
        <div className={ "topbarWrapper " + (props.menuOpen && "active") }>
            <div className="burger" onClick={ burgerHandler }>
                burger
            </div>
        </div>
    )
}
