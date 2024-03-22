// Write your code here

import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickHome = () => {
    const {history} = props
    history.replace('/')
  }

  const onClickAbout = () => {
    const {history} = props
    history.replace('/about')
  }

  return (
    <div className="header-card">
      <button type="button" className="button" onClick={onClickHome}>
        <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
      </button>
      <div>
        <Popup
          model
          trigger={
            <button type="button" className="button">
              <GiHamburgerMenu className="header-hamburger-icon" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="popup-content">
              <button className="button" onClick={() => close()} type="button">
                <IoMdClose />
              </button>
              <div className="popup-content-bottom-card">
                <button onClick={onClickHome} className="button" type="button">
                  <AiFillHome className="popup-icon" /> Home
                </button>
                <button onClick={onClickAbout} className="button" type="button">
                  <BsInfoCircleFill className="popup-icon" /> About
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default withRouter(Header)
