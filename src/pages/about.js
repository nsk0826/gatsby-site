import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const About = ( {data} ) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <h1>About Page</h1>
        <table>
          <thead>
            <tr>
              <th>パス</th>
              <th>サイズ</th>
              <th>作成時間</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.nodes.map(node => (
              <tr>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.ctime}</td>
              </tr>
            ))}
            {/* この書き方でもいい  */}
            {data.allFile.nodes.map((foo) => {
              return(
                <tr>
                  <td>{foo.relativePath}</td>
                  <td>{foo.size}</td>
                  <td>{foo.ctime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        relativePath
        size
        name
        extension
        ctime
      }
    }
  }
`
export default About;
