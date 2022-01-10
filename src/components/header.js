import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import { graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <h2>{data.site.siteMetadata.title}</h2>
      <nav>
        <ul>
          <li><Link to="/">top</Link></li>
          <li><Link to="/about" >about</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;