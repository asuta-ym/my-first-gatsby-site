import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const PostsPage = props => {
    // console.log(props)
  return (
    <Layout sectionTitle="My Posts">
      <p>New posts!</p>
      <ul>
      {
        props.data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default PostsPage