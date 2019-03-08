import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import NikImage from '../images/nikcochran.png'
import { SocialIcons } from './socialIcons'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-weight: 800;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 1px;
      background: grey;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: black;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid grey;
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid grey;
  }
`

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 0.5rem;
  position: relative;
  margin-top: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: black;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link to="/">Nik Cochran</Link>
      </Logo>
      <NavStyles>
        <>
          <Link to="/select_classes">Select Classes</Link>
          <Link to="/calendar">Calendar</Link>
          <SocialIcons />
          <Link to="/about">
            About{' '}
            <img src={NikImage} alt="Gatsby Logo" style={{ width: '80px' }} />
          </Link>
        </>
      </NavStyles>
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
