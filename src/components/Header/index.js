// Write your code here

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = props => {
  const {isClickedMenu, onClickMenu} = props
  console.log(isClickedMenu)
  const onClickHarmburger = () => {
    onClickMenu()
  }
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
              onClick={onClickHarmburger}
              type="button"
              className="hamburger-btn"
            >
              {isClickedMenu ? (
                <IoMdClose className="header-hamburger-icon" />
              ) : (
                <GiHamburgerMenu className="header-hamburger-icon" />
              )}
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
