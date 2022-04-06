import React, { useEffect } from "react";
import "./Background.scss";

export default function Background() {

    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    useEffect(() => {

        const bg = document.querySelector('.Background') as HTMLElement;

        const onMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX / windowWidth;
            const mouseY = e.clientY / windowHeight;

            bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        };

        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };

    }, []);

    
    return (
        <div>
            <div className="Background" />
        </div>
    );
}