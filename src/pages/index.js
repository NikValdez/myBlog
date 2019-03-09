import React from 'react'
import Layout from '../components/layout'
import Listing from '../components/listing'

const IndexPage = ({ location }) => (
  <div id="main">
    <Layout location={location}>
      <Listing />
    </Layout>
  </div>
)

export default IndexPage
