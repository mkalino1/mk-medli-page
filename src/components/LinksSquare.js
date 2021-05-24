import React from 'react'

export default function LinksSquare( {label, links}) {
    return (
        <div className="links-square">
            <p className="typography__footer links-square__label">{label}</p>

            {links.map((link) => {
                return <p className="typography__footer links-square__link" key={link}>{link}</p>
            })}

        </div>
    )
}
