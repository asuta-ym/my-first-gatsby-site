import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  title,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ sectionTitle, children }) => {
  return (
    <main className={container}>
      <title>My Super Cool Blog</title>
      <h1 className={title}>My Super Cool Blog</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{sectionTitle}</h1>
      {children}
    </main>
  )
}

export default Layout