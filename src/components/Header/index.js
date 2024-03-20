// Write your code here

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = props => {
  const {isClickedMenu, onClickMenu} = props
  return (
    <div className="header-card">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />

      <div>
        <Popup
          model
          trigger={
            <button
              type="button"
              className="hamburger-btn"
            >
                <IoMdClose className="header-hamburger-icon" />
                <GiHamburgerMenu className="header-hamburger-icon" />
            </button>
          }
          className="popup-content"
        >
          <div>
            <p>Hai Jai</p>
          </div>
        </Popup>
      </div>
    </div>
  )
}

export default Header
