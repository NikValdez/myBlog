import React, { Component } from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const TitleStyles = styled.span`
  h1 {
    font-family: Avenger !important;
    font-size: 32px;
    letter-spacing: 5px;
  }
  .main-container {
    transform: translate(-50%, -50%);
    color: #ffffff;
    position: absolute;
    top: 70px;
    right: -50px;
    z-index: 999;
  }

  .first-container,
  .second-container {
    cursor: pointer;
    position: relative;
  }
  .first-container h1,
  .second-container h1 {
    position: relative;
    letter-spacing: 2px;
    font-size: 3vw;
  }

  .first-container {
    margin-bottom: 15px;
  }

  span {
    display: inline-block;
    position: relative;
    margin-right: 5px;
  }
  span:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    transition: 0.6s;
    z-index: -5;
  }

  .share:hover > h1 > span:nth-child(1):after {
    background: white;
    width: 100%;

    transition: 0.6s;
    transition-delay: 100ms;
    transform: rotate(-25deg);
    padding: 5px;
  }

  .share:hover > h1 > span:nth-child(1) {
    color: #39393b;
    transition-delay: 110ms;
  }

  .share:hover > h1 > span:nth-child(2):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 200ms;
    transform: rotate(-20deg);
  }

  .share:hover > h1 > span:nth-child(2) {
    color: #39393b;
    transition-delay: 220ms;
  }

  .share:hover > h1 > span:nth-child(3):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 300ms;
    transform: rotate(-15deg);
  }

  .share:hover > h1 > span:nth-child(3) {
    color: #39393b;
    transition-delay: 330ms;
  }

  .share:hover > h1 > span:nth-child(4):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 400ms;
    transform: rotate(-10deg);
  }

  .share:hover > h1 > span:nth-child(4) {
    color: #39393b;
    transition-delay: 440ms;
  }

  .share:hover > h1 > span:nth-child(5):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 500ms;
    transform: rotate(-5deg);
  }

  .share:hover > h1 > span:nth-child(5) {
    color: #39393b;
    transition-delay: 550ms;
  }

  .share:hover > h1 > span:nth-child(6):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 600ms;
    transform: rotate(0deg);
  }

  .share:hover > h1 > span:nth-child(6) {
    color: #39393b;
    transition-delay: 660ms;
  }

  .share:hover > h1 > span:nth-child(7):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 700ms;
    transform: rotate(5deg);
  }

  .share:hover > h1 > span:nth-child(7) {
    color: #39393b;
    transition-delay: 770ms;
  }

  .share:hover > h1 > span:nth-child(8):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 800ms;
    transform: rotate(10deg);
  }

  .share:hover > h1 > span:nth-child(8) {
    color: #39393b;
    transition-delay: 880ms;
  }

  .share:hover > h1 > span:nth-child(9):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 900ms;
    transform: rotate(15deg);
  }

  .share:hover > h1 > span:nth-child(9) {
    color: #39393b;
    transition-delay: 990ms;
  }

  .share:hover > h1 > span:nth-child(10):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1000ms;
    transform: rotate(20deg);
  }

  .share:hover > h1 > span:nth-child(10) {
    color: #39393b;
    transition-delay: 1100ms;
  }
  .share:hover > h1 > span:nth-child(11):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1100ms;
    transform: rotate(25deg);
  }

  .share:hover > h1 > span:nth-child(11) {
    color: #39393b;
    transition-delay: 1200ms;
  }
  .share:hover > h1 > span:nth-child(12):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1200ms;
    transform: rotate(30deg);
  }

  .share:hover > h1 > span:nth-child(12) {
    color: #39393b;
    transition-delay: 1300ms;
  }
  .share:hover > h1 > span:nth-child(13):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1300ms;
    transform: rotate(15deg);
  }

  .share:hover > h1 > span:nth-child(13) {
    color: #39393b;
    transition-delay: 1400ms;
  }
  .share:hover > h1 > span:nth-child(14):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1400ms;
    transform: rotate(10deg);
  }

  .share:hover > h1 > span:nth-child(14) {
    color: #39393b;
    transition-delay: 1500ms;
  }
  .share:hover > h1 > span:nth-child(15):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1500ms;
    transform: rotate(5deg);
  }

  .share:hover > h1 > span:nth-child(15) {
    color: #39393b;
    transition-delay: 1600ms;
  }
  .share:hover > h1 > span:nth-child(16):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1600ms;
    transform: rotate(0deg);
  }

  .share:hover > h1 > span:nth-child(16) {
    color: #39393b;
    transition-delay: 1700ms;
  }
  .share:hover > h1 > span:nth-child(17):after {
    background: white;
    width: 100%;
    transition: 0.6s;
    transition-delay: 1700ms;
    transform: rotate(20deg);
  }

  .share:hover > h1 > span:nth-child(17) {
    color: #39393b;
    transition-delay: 1800ms;
  }
`

export class title extends Component {
  render() {
    return (
      <TitleStyles>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 2000 }}
        >
          {props => (
            <div className="main-container" style={props}>
              <div className="F share">
                {/* <h1>
                  <span id="one">H</span>
                  <span>o</span>
                  <span>m</span>
                  <span>e</span> <span>o</span>
                  <span>f</span>{' '}
                </h1>{' '} */}
                <h1>
                  <span>N</span>
                  <span>i</span>
                  <span>k</span> <span>C</span>
                  <span>o</span>
                  <span>c</span>
                  <span>h</span>
                  <span>r</span>
                  <span>a</span>
                  <span>n</span>
                  <span>.</span>
                </h1>
              </div>
            </div>
          )}
        </Spring>
      </TitleStyles>
    )
  }
}

export default title
