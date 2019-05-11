import { graphql, StaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import favicon from '../images/gatsby-icon.png'
import img from '../images/gear.png'
import Header from './header'
import './layout.css'

const MainLayout = styled.main`
  /* margin: 1rem auto; */
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 40px;
  background-image: url(${img});

  background-size: 100%;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        {/* <BlogHeader /> */}
        <MainLayout id="mainLayout">{children}</MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
