// Write your code here

import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {isClickedMenu: false}

  onClickMenu = () => {
    this.setState({isClickedMenu: true})
  }

  renderPopup = () => <p>jai</p>

  render() {
    const {isClickedMenu} = this.state
    return (
      <div className="home-container">
        <Header isClickedMenu={isClickedMenu} onClickMenu={this.onClickMenu} />
        <hr className="line" />
        <div className="home-card">
          {isClickedMenu ? (
            this.renderPopup()
          ) : (
            <img
              className="home-img"
              src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
              alt="home"
            />
          )}
        </div>
      </div>
    )
  }
}

export default Home
