import { graphql, Link, StaticQuery } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'

const Post = styled.article`
  background: #fff;
  text-align: left;
  padding-left: 20px;
  transform: rotate(-30deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  margin: 2rem;
  margin-left: 5rem;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: #00000040;
  height: 35vh;
  width: 55vh;

  a {
    color: #fff;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
    color: black;
  }
  p {
    font-size: 0.8rem;
    color: #fff;
  }
  .read-more {
    font-family: sans-serif;
    font-size: 0.8rem;
    color: transparent;
  }
  .exert {
    opacity: 0;
    transition: 1s;
  }
  &:hover .exert {
    opacity: 1;
  }

  transition: 0.2s ease-out;

  &:hover {
    background: #000000ed;
    transform: rotate(-0deg) skew(0deg) translate(20px, -15px) scale(1.05);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
    color: black;

    .read-more {
      font-family: sans-serif;
      font-size: 0.8rem;
      padding: 5px;
      text-decoration: underline;

      color: #fff;
      font-family: sans-serif;

      position: relative;
      text-decoration: none;
      display: inline-block;
      &:hover {
        color: #000000ed;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 50%;
        left: 0px;
        width: 100%;

        display: block;
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: scale(0, 1);
        -ms-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
        transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
      }

      .btn5 {
        border: none;
      }
      .btn5::before {
        content: '';
        position: absolute;
        left: 0px;
        bottom: 0px;
        z-index: -1;
        width: 100%;
        height: 100%;
        /* background: transparent; */
        box-shadow: inset 0px 0px 0px white;
        display: block;
        -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
        transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
      }
      /* if you want it to show from the right use -300px instead */
      .btn5:hover::before {
        box-shadow: inset 300px 40px 40px white;
      }
    }
    h2 {
      padding: 5px;
      color: #fff;
      color: #fff;
      font-family: sans-serif;
      position: relative;
      text-decoration: none;
      display: inline-block;
      &:hover {
        color: #000000ed;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 50%;
        left: 0px;
        width: 100%;

        display: block;
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: scale(0, 1);
        -ms-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
        transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
      }

      .btn5 {
        border: none;
      }
      .btn5::before {
        content: '';
        position: absolute;
        left: 0px;
        bottom: 0px;
        z-index: -1;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px 0px 0px white;
        display: block;
        -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
        transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
      }
      /* if you want it to show from the right use -300px instead */
      .btn5:hover::before {
        box-shadow: inset 300px 40px 40px white;
      }
    }
  }
`

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

class Listing extends Component {
  state = {
    hovered: false,
  }
  render() {
    return (
      <StaticQuery
        query={LISTING_QUERY}
        render={({ allMarkdownRemark }) =>
          allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.frontmatter.slug}>
              <Link to={`/posts${node.frontmatter.slug}`}>
                <h2>
                  <span className="btn5">{node.frontmatter.title}</span>
                </h2>
              </Link>
              <p>{node.frontmatter.date}</p>
              <p className="exert">{node.excerpt}</p>
              <Link className="read-more" to={`/posts${node.frontmatter.slug}`}>
                <span className="btn5">Read More</span>
              </Link>
            </Post>
          ))
        }
      />
    )
  }
}

export default Listing
