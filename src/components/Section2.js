import React from 'react'

export default function Section2() {
    const sectionHeader = "What our community\nis saying?"
    const sectionParagraph = "A mission-driven company that invest\nin and builds healthier living"

    return (
        <section className="section2">
            <p className="typography__header section2__header">{sectionHeader}</p>
            <p className="typography__paragraph section2__paragraph">{sectionParagraph}</p>

            <div className="section2__video-rectangle">
                <span className="section2__play-button"/>
            </div>
        </section>
    )
}
