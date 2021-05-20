import * as React from 'react'
import {
    container
} from './layout.module.css'


const BlogPage = ({ blogDate, children }) => {
    return (
        <div className={container}>
            <p>Posted: March {blogDate}, 2021</p>
            {children}
        </div>
    )
}

export default BlogPage