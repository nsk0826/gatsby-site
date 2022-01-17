import React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <h1>Gatsby Blog Site</h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.dare}</p>
          </div>
        ))}
      </Layout>
    </div>
  )
}
export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`
