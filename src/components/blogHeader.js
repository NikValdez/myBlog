import React, { Component } from 'react'
import { Spring } from 'react-spring'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const BlogHeaderStyles = styled.div`
  height: 70px;

  .container {
    text-align: center;
  }

  .content {
    position: absolute;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  /* Arrow & Hover Animation */
  #more-arrows {
    margin-bottom: 90px;
    animation: ${fadeIn} 1.5s ease-out infinite;
    width: 75px;
    height: 65px;

    &:hover {
      polygon {
        fill: #fff;
        transition: all 0.2s ease-out;

        &.arrow-bottom {
          transform: translateY(-18px);
        }

        &.arrow-top {
          transform: translateY(18px);
        }
      }
    }
  }

  polygon {
    fill: #fff;
    transition: all 0.2s ease-out;

    &.arrow-middle {
      opacity: 0.75;
    }

    &.arrow-top {
      opacity: 0.5;
    }
  }
`

class blogHeader extends Component {
  handleScroll = () => {
    const headEl = document.querySelector('.header')
    headEl.transition = '1s opacity'
    const elmnt = document.getElementById('mainLayout')
    elmnt.scrollIntoView({
      behavior: 'smooth',
    })
  }
  render() {
    return (
      <BlogHeaderStyles>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 2000, duration: 2000 }}
        >
          {props => (
            <div
              className="container"
              style={props}
              onClick={async () => {
                await this.props.scrollMe()
                await this.handleScroll()
              }}
            >
              <div className="content">
                <svg id="more-arrows">
                  <polygon
                    className="arrow-top"
                    points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                  />
                  <polygon
                    className="arrow-middle"
                    points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                  />
                  <polygon
                    className="arrow-bottom"
                    points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
                  />
                </svg>
              </div>
            </div>
          )}
        </Spring>
      </BlogHeaderStyles>
    )
  }
}

export default blogHeader
