import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLogo from '../svg/dash-d-text'
import ProfileLogo from '../svg/person-d-text'
import StatisticLogo from '../svg/stats-d-text'
import LogoutLogo from '../svg/exit-d-text'

const Navbar = ({showNav}) => {

  return (
    <nav className={showNav ? "nav-big" : "nav-small"}>
      <ul>
        <li>
          <Link to="/dashboard">
            <div className="menu-icon-box">
              <div className="menu-icon-bg">
                <svg className="icon menu-icon" viewBox="0 0 512 512"><path d={DashboardLogo} /></svg>
              </div>
            </div>
            <div className="menu-text-box">
              {showNav && <p>Dashboard</p>}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <div className="menu-icon-box">
              <div className="menu-icon-bg">
                <svg className="icon menu-icon" viewBox="0 0 512 512"><path d={ProfileLogo} /></svg>
              </div>
            </div>
            <div className="menu-text-box">
              {showNav && <p>Profile</p>}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/statistic">
            <div className="menu-icon-box">
              <div className="menu-icon-bg">
                <svg className="icon menu-icon" viewBox="0 0 512 512"><path d={StatisticLogo} /></svg>
              </div>
            </div>
            <div className="menu-text-box">
              {showNav && <p>Statistic</p>}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <div className="menu-icon-box">
              <div className="menu-icon-bg">
                <svg className="icon menu-icon" viewBox="0 0 512 512"><path d={LogoutLogo} /></svg>
              </div>
            </div>
            <div className="menu-text-box">
              {showNav && <p>Logout</p>}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
