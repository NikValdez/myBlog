import { graphql } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from './hamberger'
import './postStyles.css'

const PostStyles = styled.div`
  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.55), 0 40px 40px rgba(0, 0, 0, 0.75);
  background: white;
  padding: 10px 40px 20px 40px;

  width: 70%;
  margin: 0 auto;
  div {
    background: white;
    margin: 0 100px 0 100px;
  }
  .title {
    text-align: center;
    font-family: inter-light;
    margin-bottom: 20px;
    margin-top: 50px;
    color: #464242;
  }
  .date {
    font-family: inter-thin;
    text-align: center;
  }
`

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    // const { location } = this.props

    return (
      <div className="postStyles">
        <Hamburger />
        <PostStyles>
          <h1 className="title">{markdownRemark.frontmatter.title}</h1>
          <p className="date">{markdownRemark.frontmatter.date}</p>

          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </PostStyles>
      </div>
    )
  }
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
