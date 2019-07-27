import { Link } from 'gatsby'
import React, { Component } from 'react'
import './style.css'

export class Hamburger extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="menu-toggle" />
        <label id="trigger" for="menu-toggle" />
        <label id="burger" for="menu-toggle" />
        <ul id="menu">
          <li className="ham">
            <Link to="/" className="hamLink">
              Home
            </Link>
          </li>
          <li className="ham">
            <a className="hamLink" href="#">
              About
            </a>
          </li>
          <li className="ham">
            <a className="hamLink" href="#">
              Social
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Hamburger
