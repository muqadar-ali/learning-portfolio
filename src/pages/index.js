import * as React from "react"
import Layout  from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const IndexPage = ({data}) =>{
  return (
    <Layout pageTitle="Home">
      <p>This is my home page using gatsby tutorial </p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default IndexPage