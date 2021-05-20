import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import {
    blogNavLink,
    blogNavItem
} from './blog.module.css'

const BlogPage = () => {
  return (
    <Layout sectionTitle="My Blog Posts">
        <ul>
            <li className={blogNavItem}>
                <Link to="/blog/best-post" className={blogNavLink}>
                    The Greatest Post You've Ever Read
                </Link>
                <p>
                    Posted: March 03, 2021
                </p>
            </li>
            <li className={blogNavItem}>
                <Link to="/blog/another-post" className={blogNavLink}>
                    Another Great Blog Post
                </Link>
                <p>
                    Posted: March 02, 2021
                </p>
            </li>
            <li className={blogNavItem}>
                <Link to="/blog/first-post" className={blogNavLink}>
                    My First Blog Post
                </Link>
                <p>
                    Posted: March 01, 2021
                </p>
            </li>
        </ul>
    </Layout>
  )
}

export default BlogPage