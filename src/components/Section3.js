import React from 'react'
import Card from './Card'

export default function Section3() {
    const sectionHeader = "What you’re getting?"
    const sectionParagraph = "We bring you personalized development programs that are backed by research and crafted from the years of experience"
    
    const cardHeaders = ["1 FREE chat session", "Personal Coach", "Text chat session"]
    const cardParagraphs = [
        "Start with a free text\nbased chat session online",
        "A dedicated coach to help\nyou through your journey",
        "An excellent way of preaparing\na projects wireframe"
    ]

    return (
        <section className="section3">
            <p className="typography__header section3__header">{sectionHeader}</p>
            <p className="typography__paragraph section3__paragraph">{sectionParagraph}</p>
            <div className="section3__cards">
                <Card cardNum={1} header={cardHeaders[0]} paragraph={cardParagraphs[0]}/>
                <Card cardNum={2} header={cardHeaders[1]} paragraph={cardParagraphs[1]}/>
                <Card cardNum={3} header={cardHeaders[2]} paragraph={cardParagraphs[2]}/>
            </div>
        </section>
    )
}
