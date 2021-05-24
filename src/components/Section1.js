import React from 'react'
import Hero from './Hero'
import NumberSquare from './NumberSquare'
import Top from './Top'

export default function Section1() {
    const squareTexts = ["Scientifically\nbased tests", "Medical\nrecommendations", "Students learning"]

    return (
        <section className="section1">
            <Top/>
            <Hero/>
            <div className="numbers">
                <NumberSquare firstText="230+" secondText={squareTexts[0]}/>
                <NumberSquare firstText="10,000+" secondText={squareTexts[1]}/>
                <NumberSquare firstText="25M+" secondText={squareTexts[2]}/>
            </div>
        </section>
    )
}
