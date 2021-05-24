import React from 'react'

export default function Hero() {
    const sectionHeader = "Check y  ur well-being"
    const sectionParagraph = "We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way."
    const buttonText = "Get started"

    return (
        <div className="hero">
            <div className="hero__image"/>
            <div className="hero__text_section">
                <p className="typography__header hero__header">{sectionHeader}<span className="hero__ellipse"/></p>
                <p className="typography__paragraph hero__paragraph">{sectionParagraph}</p>
                <div className="hero__button">
                    <p className="hero__button_text">{buttonText}</p>
                </div>
            </div>
        </div>
    )
}
