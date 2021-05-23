import React from 'react'
import Card from './Card'

export default function Section3() {
    return (
        <section className="section3">
            <p className="typography__header section3__header">What you’re getting?</p>
            <p className="typography__paragraph section3__paragraph">We bring you personalized development programs that are backed by research and crafted from the years of experience</p>
            <div className="section3__cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}
