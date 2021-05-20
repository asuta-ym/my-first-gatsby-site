import * as React from 'react'
import Layout from '../../components/layout'
import BlogPage from '../../components/blog-page'


const AnotherPostPage = () => {
    return (
        <div>
            <Layout sectionTitle="Another Great Blog Post">

            </Layout>
            <BlogPage blogDate="02">
                <div>   
                    <h2>Introduction</h2>
                    <p>I'm going to teach you things.</p>
                </div>    
                <div>   
                    <h2>Steps</h2>
                    <p>Follow my instructions!</p>
                </div>    
                <div>   
                    <h2>Conclusion</h2>
                    <p>Wow, didn't you learn so much?</p>
                </div>    
            </BlogPage>
        </div>
    )
}

export default AnotherPostPage