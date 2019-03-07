import { graphql, Link, StaticQuery } from 'gatsby'
import React, { Component } from 'react'
import styled from 'styled-components'

const Post = styled.article`
  /* box-shadow: 7px 9px 12px 0 rgba(133, 133, 133, 0.5); */
  margin: 2rem;
  padding: 1rem;
  border-radius: 5px;
  /* border: 1px solid black; */
  margin-bottom: 1rem;
  background: #00000040;
  height: 35vh;
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
    text-decoration: underline;
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
    box-shadow: 7px 9px 12px 0 rgba(133, 133, 133, 0.5);
    transform: translate3d(0, -10px, 0);
    background: #000000ed;
    transform: scale(1.05);

    .read-more {
      color: white;
    }
    h2 {
      color: #fff;
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
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>{node.frontmatter.date}</p>
              <p className="exert">{node.excerpt}</p>
              <Link className="read-more" to={`/posts${node.frontmatter.slug}`}>
                Read More
              </Link>
            </Post>
          ))
        }
      />
    )
  }
}

export default Listing
