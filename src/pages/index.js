import * as React from "react"
import Layout  from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const IndexPage = ({data}) =>{
  return (
    <Layout pageTitle="Home">
      <p>This is my home page using gatsby tutorial </p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.id}>
            {node.name}
          </li>
        ))
      }
      </ul>
      <StaticImage 
        src="../images/profile.jpg"
        alt="My pic"
        loading="eager"
        placeholder="blurred"
        layout="fixed" 
      />
      
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "content"}}) {
      nodes {
        name
        id
      }
    }
  }
`

export default IndexPage