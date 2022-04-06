import React, { useEffect } from "react";
import Comets from "./components/Comets";
import "./Background.scss";

export default function Background() {

    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    useEffect(() => {

        const bg0 = document.querySelector('.Background0') as HTMLElement;
        const bg1 = document.querySelector('.Background1') as HTMLElement;

        const onMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX / windowWidth;
            const mouseY = e.clientY / windowHeight;

            bg0.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
            bg1.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        };

        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };

    }, [windowHeight, windowWidth]);

    
    return (
        <div>
            <div className="Background0">
                < Comets />
            </div>
            <div className="Background1"/>
        </div>
    );
}