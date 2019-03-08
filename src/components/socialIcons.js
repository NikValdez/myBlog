import React, { Component } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiXCircle } from 'react-icons/fi'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const IconStyles = styled.div`
  .close {
    float: right;
    svg {
      font-size: 50px;
      color: white;
    }
  }
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
    margin: 0 5px;
  }

  ul li a svg {
    font-size: 40px;
    color: #262626;
    line-height: 80px;
    transition: 0.5s;
    padding-right: 14px;
  }

  ul li a span {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 30px;
    color: #262626;
    letter-spacing: 4px;
    transition: 0.5s;
  }

  ul li a {
    text-decoration: none;
    display: absolute;
    display: block;
    width: 210px;
    height: 80px;
    background: #fff;
    text-align: left;
    padding-left: 20px;
    transform: rotate(-30deg) skew(25deg) translate(0, 0);
    transition: 0.5s;
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  }
  ul li a:before {
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    height: 100%;
    width: 20px;
    background: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
  }
  ul li a:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -10px;
    height: 20px;
    width: 100%;
    background: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }

  ul li a:hover {
    transform: rotate(-30deg) skew(25deg) translate(20px, -15px);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
  }

  ul li:hover .fa {
    color: #fff;
  }

  ul li:hover span {
    color: #fff;
  }

  ul li:hover:nth-child(1) a {
    background: #3b5998;
  }
  ul li:hover:nth-child(1) a:before {
    background: #365492;
  }
  ul li:hover:nth-child(1) a:after {
    background: #4a69ad;
  }

  ul li:hover:nth-child(2) a {
    background: #00aced;
  }
  ul li:hover:nth-child(2) a:before {
    background: #097aa5;
  }
  ul li:hover:nth-child(2) a:after {
    background: #53b9e0;
  }

  ul li:hover:nth-child(3) a {
    background: #dd4b39;
  }
  ul li:hover:nth-child(3) a:before {
    background: #b33a2b;
  }
  ul li:hover:nth-child(3) a:after {
    background: #e66a5a;
  }

  ul li:hover:nth-child(4) a {
    background: #e4405f;
  }
  ul li:hover:nth-child(4) a:before {
    background: #d81c3f;
  }
  ul li:hover:nth-child(4) a:after {
    background: #e46880;
  }
`

export class SocialIcons extends Component {
  state = {
    showModal: false,
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <button onClick={this.handleOpenModal}>Social</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="modal"
          // onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: '#000000c7',
            },
            content: {
              backgroundColor: '#0000008f',
              border: 'none',
            },
          }}
        >
          <IconStyles>
            <span className="close" onClick={this.handleCloseModal}>
              <FiXCircle />
            </span>
            <ul>
              <li>
                <a href="#">
                  <FaFacebook />
                  <span> - Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                  <span> - Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                  <span> - Google</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                  <span> - Instagram</span>
                </a>
              </li>
            </ul>
          </IconStyles>
        </ReactModal>
      </>
    )
  }
}

export default SocialIcons