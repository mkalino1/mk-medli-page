import React from 'react'

export default function Card( {header, paragraph, cardNum}) {
    return (
        <div className="card">
            <span className={"card__image card__image--"+cardNum}/>
            <p className="card__header">{header}</p>
            <p className="card__paragraph">{paragraph}</p>
        </div>
    )
}
