// Write your code here

import Header from '../Header'

import './index.css'

const NotFound = () => {
  return (
    <>
      <Header />
      <hr className="line" />
      <div className="not-found-card">
        <img
          className="not-found-img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1 className="not-found-heading">Lost Your Way?</h1>
        <p className="not-found-description">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </>
  )
}

export default NotFound
