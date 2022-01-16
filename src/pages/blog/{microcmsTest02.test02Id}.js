import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const BlogPage = (( {data} ) => (
  <Layout>
    <span>{data.microcmsTest02.test02Id}</span>
    <h1>{data.microcmsTest02.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsTest02.content}`,
      }}
    />
  </Layout>
))

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsTest02 (id: { eq: $id })  {
      title
      test02Id
      content
    }
  }
`