import React, { useState } from 'react'
import MenuLogo from '../svg/menu-d-text'
import SunLogo from '../svg/sun-d-text'
import MoonLogo from '../svg/moon-d-text'


const Header = ({setShowNav, showNav}) => {
  const [ themeDay, setThemeDay ] = useState(true)

  const handleClickTheme = () => {
    setThemeDay(!themeDay)
    console.log('clicked on theme')
  }

  const handleClickProfile = () => {
    setShowNav(!showNav)
    console.log('clicked on profile')
  }

  return (
    <>
      <div className="hamburger-logo-box" onClick={handleClickProfile}><svg className="icon hamburger-icon" viewBox="0 0 512 512"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d={MenuLogo} /></svg></div>
      <h2>The Kanban Board!</h2>
      <div className="theme-changer" onClick={handleClickTheme}>
        <div className={themeDay ? "theme-changer-btn theme-day" : "theme-changer-btn theme-night"}>
          {
            themeDay ? 
            <svg className="icon moon-icon" viewBox="0 0 512 512"><path d={MoonLogo} /></svg>
            :
            <svg className="icon sun-icon" viewBox="0 0 512 512"><path d={SunLogo} /></svg>
          }
        </div>
      </div>
    </>
  )
}

export default Header
