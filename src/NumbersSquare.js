import React from 'react'

export default function NumbersSquare( {firstText, secondText}) {
    return (
        <div className="numbers__square">
            <p className="numbers__first-text">{firstText}</p>
            <p className="numbers__second-text">{secondText}</p>
        </div>
    )
}