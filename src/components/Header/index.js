// Write your code here

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  return (
    <div className="header-card">
      <Link className="link" to="/">
        <button type="button" className="button">
          <img
            className="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </button>
      </Link>
      <div>
        <Popup
          model
          trigger={
            <button
              data-testid="hamburgerIconButton"
              type="button"
              className="button"
            >
              <GiHamburgerMenu className="header-hamburger-icon" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="popup-content">
              <button
                data-testid="closeButton"
                className="button"
                onClick={() => close()}
                type="button"
              >
                <IoMdClose />
              </button>
              <ul className="popup-content-bottom-card">
                <li>
                  <Link to="/" className="link">
                    <button className="button" type="button">
                      <AiFillHome className="popup-icon" /> Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    <button className="button" type="button">
                      <BsInfoCircleFill className="popup-icon" /> About
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default Header
