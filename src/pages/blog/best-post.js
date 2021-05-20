import * as React from 'react'
import Layout from '../../components/layout'
import BlogPage from '../../components/blog-page'


const BestPostPage = () => {
    return (
        <div>
            <Layout sectionTitle="The Greatest Post You've Ever Read">

            </Layout>
            <BlogPage blogDate="03">
                <p>Words will go here. It's a great post.</p>
                <p>Aren't you <strong>impressed</strong>?</p>
            </BlogPage>
        </div>
    )
}

export default BestPostPage