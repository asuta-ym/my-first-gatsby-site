// Step 1: Import React
// import { formatFromFilename } from 'gatsby-plugin-image/dist/src/image-utils'
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout sectionTitle="Home Page">
      <p>Welcome to my blog!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>  
  )
}

// Step 3: Export your component
export default IndexPage