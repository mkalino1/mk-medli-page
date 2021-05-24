import React from 'react'
import LinksSquare from './LinksSquare'

export default function Section4() {
    const labelText = "Try Medli for free"
    const inputText = "Enter your email"
    const buttonText = "Get started"

    const linksSquaresLabels = [
        "Product",
        "Company",
        "Help"
    ]

    const linksSquaresLinks = [
        [
            "Updates",
            "Security",
            "Chrome Extension"
        ],
        [
            "About",
            "Blog",
            "Join Us"
        ],
        [
            "Talk to Support",
            "Support Docs",
            "API Docs",
            "System Status"
        ]
    ] 

    const terms = "Terms & Conditions"

    return (
        <footer className="footer">
            <div className="logo footer__logo">
                <div className="logo__image"/>
                <div className="logo__text footer__logo-text">Medli<span className="logo__dot"/></div>
            </div>

            <div className="footer__container">
                <div className="footer__newsletter">
                    <div className="typography__footer footer__newsletter-label">{labelText}</div>
                    <input className="typography__footer footer__newsletter-input" placeholder={inputText}/>
                    <div className="typography__footer footer__newsletter-button">{buttonText}</div>
                </div>
                <div className="footer__links">
                    <LinksSquare label={linksSquaresLabels[0]} links={linksSquaresLinks[0]}/>
                    <LinksSquare label={linksSquaresLabels[1]} links={linksSquaresLinks[1]}/>
                    <LinksSquare label={linksSquaresLabels[2]} links={linksSquaresLinks[2]}/>
                </div>
            </div>

            <span className="footer__bar"/>
            <div className="footer__terms">{terms}</div>
        </footer>
    )
}
