import React, {useState} from 'react'

export default function Top() {
    const menuItems = ["Home", "About", "Courses", "News", "Contact", "Log in"]

    const [hamburgerActive, setHamburgerActive] = useState(false)

    const handleHamburgerClick = () => {
        setHamburgerActive(!hamburgerActive)
    }

    return (
        <div className="top">
            <div className="logo top__logo">
                <div className="logo__image"/>
                <div className="logo__text top__logo-text">Medli<span className="logo__dot"/></div>
            </div>

            <div className={"top__menu" + (hamburgerActive ? " top__menu--active" : "")}>
                {menuItems.map((item) => {
                    return <div className="top__menu-item" key={item}>{item}</div>
                })}
            </div>
            <span className="top__dot"/>

            <div onClick={handleHamburgerClick} className={"hamburger" + (hamburgerActive ? " hamburger--active" : "")}>
                <span/><span/><span/>
            </div>
        </div>
    )
}
