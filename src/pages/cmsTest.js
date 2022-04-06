import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout.js";

const cmsTestPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allMicrocmsTest02.nodes.map( node  => (
        <li key={node.test02Id}>
          <Link to={`/blog/${node.test02Id}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)
export default cmsTestPage

export const query = graphql`
{
  allMicrocmsTest02 {
    nodes {
      title
      content
      test02Id
    }
  }
}
` 