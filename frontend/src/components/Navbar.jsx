import React, { useContext, useState } from 'react'
import { ThemeContext } from "../utility/Context"
import { Link } from 'react-router-dom'
import {RocketLogo, PlanetLogo, LogoutLogo, StatisticLogo, SettingsLogo, ProfileLogo, MsgLogo, MenuLogo, DashboardLogo} from '../svg/svg-d-texts'

const Navbar = () => {

  const [ isNavOpen, setIsNavOpen ] = useState(true)

  const handleClickBurger = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className={isNavOpen ? "nav-big" : "nav-small"}>
      <div className="navbar-top">
        <div className={isNavOpen ? "logo-box" : "logo-box not-visible"}>
          <svg className="icon icon-planet" viewBox="0 0 512 512"><path d={RocketLogo} /></svg>
          <p>
            <p className="small-the">The</p>
            RocketLab
          </p>
        </div>
        <div className="navbar-top-bot-btn-box" onClick={handleClickBurger}>
          <svg svg className="icon icon-hamburger" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d={MenuLogo} /></svg>
        </div>
      </div>
      <ul>
      <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={PlanetLogo} /></svg>
          </div>
          <p className={isNavOpen ? "" : "not-visible"}>Home</p>
          { !isNavOpen && <span>Home</span> }
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={DashboardLogo} /></svg>
          </div>
          <p className={isNavOpen ? "" : "not-visible"}>Dashboard</p>
          { !isNavOpen && <span>Dashboard</span> }
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={ProfileLogo} /></svg>
          </div>
          <p className={isNavOpen ? "" : "not-visible"}>Profile</p>
          { !isNavOpen && <span>Profile</span> }
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"  strokeLinejoin="round"><path d={MsgLogo} /></svg>
          </div>
          <p className={isNavOpen ? "" : "not-visible"}>Messages</p>
          { !isNavOpen && <span>Messages</span> }
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={StatisticLogo} /></svg>
          </div>
          <p className={isNavOpen ? "" : "not-visible"}>Analytics</p>
          { !isNavOpen && <span>Analytics</span> }
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={SettingsLogo} /></svg>
          </div>
          <p className={isNavOpen ? "" : "not-visible"}>Settings</p>
          { !isNavOpen && <span>Settings</span> }
        </li>
      </ul>
      <div className="navbar-bot">
        <div className={isNavOpen ? "user-box" : "user-box not-visible"}>
          <div className="profile-pic">

          </div>
          <div className="profile-details">
            <p className="profile-name">
              John Doe
            </p>
            <p className="profile-title">
              Web Developer
            </p>
          </div>
        </div>
        <div className="navbar-top-bot-btn-box">
          <svg className="icon" viewBox="0 0 512 512"><path d={LogoutLogo} /></svg>
          <span>Logout</span>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
