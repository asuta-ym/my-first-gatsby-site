import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'

const Layout = ({ sectionTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)
  return (
    <main className={styles.container}>
      <title>{sectionTitle} | {data.site.siteMetadata.title}</title>
      <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/blog/blog" className={styles.navLinkText}>
              Blog
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/post" className={styles.navLinkText}>
              Post
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.heading}>{sectionTitle}</h1>
      {children}
    </main>
  )
}

export default Layout