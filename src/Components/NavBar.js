import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
      <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Newsify</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/about">Business</a>
              </li>

              <a className="nav-link active" href="/entertainment">Entertainment</a>
              <a className="nav-link active" href="/general">General</a>
              <a className="nav-link active" href="/health">Health</a>
              <a className="nav-link active" href="/science">Science</a>
              <a className="nav-link active" href="/sports">Sports</a>
              <a className="nav-link active" href="/technology">Technology</a>
            </ul>
          </div>
        </div>
      </nav></div>
    )
  }
}

export default NavBar