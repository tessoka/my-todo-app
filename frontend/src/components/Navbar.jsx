import React, { useContext } from 'react'
import { ThemeContext } from "../utility/Context"
import { Link } from 'react-router-dom'
import {PlanetLogo, LogoutLogo, StatisticLogo, SettingsLogo, ProfileLogo, MsgLogo, MenuLogo, DashboardLogo} from '../svg/svg-d-texts'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-top">
        <div className="logo-box">
          <svg className="icon icon-planet" viewBox="0 0 512 512"><path d={PlanetLogo} /></svg>
          <p>Planet T</p>
        </div>
        <div className="hamburger-box">
          <svg svg className="icon icon-hamburger" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d={MenuLogo} /></svg>
        </div>
      </div>
      <ul>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={DashboardLogo} /></svg>
          </div>
          <p>Dashboard</p>
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={ProfileLogo} /></svg>
          </div>
          <p>Profile</p>
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"  strokeLinejoin="round"><path d={MsgLogo} /></svg>
          </div>
          <p>Messages</p>
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={StatisticLogo} /></svg>
          </div>
          <p>Analytics</p>
        </li>
        <li>
          <div className="icon-box">
            <svg className="icon" viewBox="0 0 512 512"><path d={SettingsLogo} /></svg>
          </div>
          <p>Settings</p>
        </li>
      </ul>
      <div className="navbar-bot">
        <div className="user-box">
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
        <div className="log-box">
        <svg className="icon" viewBox="0 0 512 512"><path d={LogoutLogo} /></svg>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
