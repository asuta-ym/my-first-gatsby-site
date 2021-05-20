import * as React from 'react'
import Layout from '../../components/layout'
import BlogPage from '../../components/blog-page'


const FirstPostPage = () => {
    return (
        <div>
            <Layout sectionTitle="My First Blog Post">

            </Layout>
            <BlogPage blogDate="01">
                <p>This is my very first post!</p>
                <ul>
                    <li>I can use lists</li>
                    <li>I can make things italics</li>
                    <li>I can make things <strong>bold</strong></li>
                </ul>
            </BlogPage>
        </div>
    )
}

export default FirstPostPage