import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import SocialIcons from './socialIcons'
import Title from './title'

const StyledHeader = styled.header`
  background: 400px;
  h1 {
    font-family: verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  #btn1 {
    top: 100px;
  }

  #btn2 {
    top: 200px;
  }

  #btn3 {
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
    width: 600px;
    border-radius: 0px;
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
    border-bottom: 4px solid black;
  }

  div.button:active {
    background-color: black;
    transition: 0s;
    color: #ecf0f1;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Title />
    <div className="bar">
      <div id="btn1" className="button">
        <SocialIcons />
      </div>

      <a href="https://www.example">
        <div id="btn2" className="button">
          <h1>Blog</h1>
        </div>
      </a>

      <a href="https://www.example.co.uk">
        <div id="btn3" className="button">
          <h1>ABOUT</h1>
        </div>
      </a>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
