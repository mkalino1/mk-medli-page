import React from 'react'
import NumbersSquare from './NumbersSquare'

export default function Section1() {
    return (
        <section className="section1">

            <div className="top">
                <div className="top__logo">
                    <div className="top__logo-image"/>
                    <div className="top__logo-text">Medli<span className="top__logo-dot"/></div>
                </div>
                <div className="top__menu">
                    <div className="top__menu-item">Home</div>
                    <div className="top__menu-item">About</div>
                    <div className="top__menu-item">Courses</div>
                    <div className="top__menu-item">News</div>
                    <div className="top__menu-item">Contact</div>
                    <div className="top__menu-item">Log in</div>
                </div>
                <span className="top__dot"/>
            </div>

            <div className="hero">
                <div className="hero__image"/>
                <div className="hero__text_section">
                    <p className="hero__header">Check y  ur well-being<span className="hero__ellipse"/></p>
                    <p className="hero__paragraph">We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way. </p>
                    <div className="hero__button">
                        <p className="hero__button_text">Get started</p>
                    </div>
                </div>
            </div>

            <div className="numbers">
                <NumbersSquare firstText="230+" secondText="Scientifically
based tests"/>
                <NumbersSquare firstText="10,000+" secondText="Medical
recommendations"/>
                <NumbersSquare firstText="25M+" secondText="Students learning"/>
            </div>

        </section>
    )
}
