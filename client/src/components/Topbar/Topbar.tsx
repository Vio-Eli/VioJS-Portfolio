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
            <div className={"burger " + (props.menuOpen && "active")} onClick={ burgerHandler }>
                <span className='lineOne'></span>
                <span className='lineTwo'></span>
            </div>
        </div>
    )
}
