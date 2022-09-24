import React, { useEffect } from 'react';
import './Title.scss';
import Background from '../../components/Backgound/Background';


class TextScramble {
    // Typescript declarations
    el: any;
    chars: string;
    queue: Array<any> = [];
    frameRequest: number = 0;
    frame: number = 0;
    resolve: any;

    constructor(el: any) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
    }

    setText(newText: string) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({
                from,
                to,
                start,
                end
            });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = "";
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }

                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

export default function Title() {

    const phrases = [
        "VioJS",
        "VioJS.com",
        "Vio JS.com",
        "Vio Jsncom",
        "Vio Jsncorn",
        "Vio + Jsncorn"
    ];

    useEffect(() => {
        const el = document.querySelector(".text");
        const fx = new TextScramble(el);
        let counter = 0;

        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 900);
            });
            counter = (counter + 1) % phrases.length;
        };

        next();

    }, []);

    return (
        <div className="container">
            < Background />
            <div className="text"></div>
            <div className="lowertext">Machine Learning - Databases - Web Design</div>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 42 L60 20"></path>
              <path className="a3" d="M0 40 L30 52 L60 40"></path>
            </svg>
        </div>
    );
}