import React from 'react'

export default function NumberSquare( {firstText, secondText}) {
    return (
        <div className="numbers__square">
            <p className="numbers__first-text">{firstText}</p>
            <p className="typography__paragraph numbers__second-text">{secondText}</p>
        </div>
    )
}
