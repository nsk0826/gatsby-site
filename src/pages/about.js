import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const AboutPage = ( {data} ) => {
  return (
    <div>
      <Layout>
        <h2>{data.site.siteMetadata.title}</h2>
        <h1>About Page!!</h1>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`
export default AboutPage;
