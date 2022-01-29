import React, { useState, useContext } from 'react'
import MenuLogo from '../svg/menu-d-text'
import SunLogo from '../svg/sun-d-text'
import MoonLogo from '../svg/moon-d-text'
import { ThemeContext } from "../utility/Context"


const Header = ({setShowNav, showNav}) => {
  const { themeColor, setThemeColor } = useContext(ThemeContext)

  const handleClickTheme = () => {
    if ( themeColor === "light") {
      localStorage.setItem("themeColor", "dark")
      setThemeColor("dark")
    } else {
      localStorage.setItem("themeColor", "light")
      setThemeColor("light")
    }
    console.log('clicked on theme')
  }

  const handleClickProfile = () => {
    setShowNav(!showNav)
    console.log('clicked on profile')
  }

  return (
    <>
      <div className="hamburger-logo-box">
        <div className="hamburger-logo-bg" onClick={handleClickProfile}>
          <svg className="icon hamburger-icon" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d={MenuLogo} /></svg>
        </div>
      </div>
      <h2>The Todo App!</h2>
      <div className="theme-changer-box">
        <div className="theme-changer" onClick={handleClickTheme}>
          <div className={themeColor === "light" ? "theme-changer-btn theme-day" : "theme-changer-btn theme-night"}>
            {
              themeColor === "light" ? 
              <svg className="icon moon-icon" viewBox="0 0 512 512"><path d={MoonLogo} /></svg>
              :
              <svg className="icon sun-icon" viewBox="0 0 512 512"><path d={SunLogo} /></svg>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
