import PropTypes from 'prop-types'
import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import CinRiver from '../images/cinRiver.gif'
import SocialIcons from './socialIcons'
import './style.css'
import Title from './title'

const StyledHeader = styled.header`
  /* color: blue; */

  .header {
    background-image: url(${CinRiver});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh !important;
  }

  h1 {
    font-family: playfair-bold, sans-serif;
    font-weight: bold;
    text-align: center;
    position: relative;
  }

  .btn1 {
    top: 100px;
  }

  .btn2 {
    top: 200px;
  }

  .btn3 {
    top: 300px;
  }

  div.button {
    background-color: #ffffff;
    color: black;
    border: none;
    border-radius: 30px;
    width: 500px;
    height: 60px;
    position: fixed;
    left: -435px;
    transition: 0.7s ease;
    z-index: 999;
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  }

  div.button:hover {
    background-color: #ffffff;
    position: fixed;
    left: -50px;
    width: 400px;
    border-radius: 0px;
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
    border-bottom: 4px solid black;
  }

  div.button:active {
    background-color: black;
    transition: 0s;
    color: #ecf0f1;
  }

  #intro {
    position: absolute;
    top: 150px;
    left: 100px;
    color: white;
    p {
      color: white;
      font-family: Avenger;
      font-size: 28px;
      letter-spacing: 3px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <>
    <StyledHeader>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1500, duration: 2000 }}
      >
        {props => (
          <div id="intro" style={props}>
            <p>
              <span className="intro">T</span>
              <span className="intro">h</span>
              <span className="intro">i</span>
              <span className="intro">s</span>
              <span className="intro"> </span>
              <span className="intro">i</span>
              <span className="intro">s</span>
              <span className="intro"> </span>
              <span className="intro">w</span>
              <span className="intro">h</span>
              <span className="intro">e</span>
              <span className="intro">r</span>
              <span className="intro">e</span>
              <span className="intro"> </span>
              <span className="intro">I</span>
              <span className="intro"> </span>
              <span className="intro">s</span>
              <span className="intro">h</span>
              <span className="intro">a</span>
              <span className="intro">r</span>
              <span className="intro">e</span>
              <span className="intro"> </span>
              <span className="intro">s</span>
              <span className="intro">o</span>
              <span className="intro">m</span>
              <span className="intro">e</span>
              <span className="intro"> </span>
              <span className="intro">i</span>
              <span className="intro">d</span>
              <span className="intro">e</span>
              <span className="intro">a</span>
              <span className="intro">s</span>
              <span className="intro"> </span>
              <span className="intro">I</span>
              <span className="intro">'</span>
              <span className="intro">v</span>
              <span className="intro">e</span>
              <span className="intro"> </span>
              <span className="intro">b</span>
              <span className="intro">e</span>
              <span className="intro">e</span>
              <span className="intro">n</span>
              <span className="intro"> </span>
              <span className="intro">t</span>
              <span className="intro">h</span>
              <span className="intro">i</span>
              <span className="intro">n</span>
              <span className="intro">k</span>
              <span className="intro">i</span>
              <span className="intro">n</span>
              <span className="intro">g</span>
              <span className="intro"> </span>
              <span className="intro">a</span>
              <span className="intro">b</span>
              <span className="intro">o</span>
              <span className="intro">u</span>
              <span className="intro">t</span>
              <span className="intro">.</span>
            </p>
            <p>
              <span className="intro">C</span>
              <span className="intro">l</span>
              <span className="intro">i</span>
              <span className="intro">c</span>
              <span className="intro">k</span>
              <span className="intro"> </span>
              <span className="intro">t</span>
              <span className="intro">h</span>
              <span className="intro">e</span>
              <span className="intro"> </span>
              <span className="intro">a</span>
              <span className="intro">r</span>
              <span className="intro">r</span>
              <span className="intro">o</span>
              <span className="intro">w</span>
              <span className="intro"> </span>
              <span className="intro">t</span>
              <span className="intro">o</span>
              <span className="intro"> </span>
              <span className="intro">r</span>
              <span className="intro">e</span>
              <span className="intro">a</span>
              <span className="intro">d</span>
              <span className="intro"> </span>
              <span className="intro">t</span>
              <span className="intro">h</span>
              <span className="intro">e</span>
              <span className="intro">m</span>
              <span className="intro">.</span>
            </p>
          </div>
          // is is where I share some ideas I've been thinking
          // about.
        )}
      </Spring>

      <Spring
        from={{ opacity: 0, height: 100 }}
        to={{ opacity: 1, height: 650 }}
      >
        {props => <div style={props} className="header" />}
      </Spring>

      <Title />

      <div className="bar">
        <div id="wave1" className="button btn1">
          <SocialIcons />
        </div>

        <a href="mailto:nikcochran@gmail.com" target="_top">
          <div id="wave2" className="button btn2">
            <h1>Contact</h1>
          </div>
        </a>

        <a href="#">
          <div id="wave3" className="button btn3">
            <h1>About</h1>
          </div>
        </a>
      </div>
    </StyledHeader>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
