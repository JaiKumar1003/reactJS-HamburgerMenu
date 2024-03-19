// Write your code here

import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => {
  return (
    <div className="header-card">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website-logo"
      />
      <GiHamburgerMenu className="header-menu" />
    </div>
  )
}

export default Header
