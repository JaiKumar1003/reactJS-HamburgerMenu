// Write your code here

import Header from '../Header'

import './index.css'

const About = () => {
  return (
    <>
      <Header />
      <hr className="line" />
      <div className="about-card">
        <img
          className="about-img"
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
      </div>
    </>
  )
}

export default About
